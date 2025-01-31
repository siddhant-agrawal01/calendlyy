"use client";

import React, { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import useFetch from "@/hooks/use-fetch";
import { usernameSchema } from "@/app/lib/validators";
import { getLatestUpdates } from "@/actions/dashboard";
import { format } from "date-fns";

export default function DashboardPage() {
  const { user, isLoaded } = useUser();

  const {
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(usernameSchema),
  });

  useEffect(() => {
    setValue("username", user?.username);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded]);

  const {
    loading: loadingUpdates,
    data: upcomingMeetings,
    fn: fnUpdates,
  } = useFetch(getLatestUpdates);

  useEffect(() => {
    (async () => await fnUpdates())();
  }, []);

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            Welcome, {user?.firstName}!
          </CardTitle>
        </CardHeader>
        <CardContent>
          {!loadingUpdates ? (
            <div className="space-y-6 font-bold font-xl">
              <div>
                {upcomingMeetings && upcomingMeetings?.length > 0 ? (
                  <ul className="space-y-3 list-none">
                    {upcomingMeetings?.map((meeting) => (
                      <li
                        key={meeting.id}
                        className="p-3 bg-white dark:bg-gray-700 rounded shadow-sm border-l-4 border-blue-500"
                      >
                        {meeting.event.title} on{" "}
                        {format(
                          new Date(meeting.startTime),
                          "MMM d, yyyy h:mm a"
                        )}{" "}
                        with {meeting.name}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No upcoming meetings</p>
                )}
              </div>
            </div>
          ) : (
            <div className="flex justify-center py-4">
              <div
                className="w-8 h-8 border-4 border-gray-300 dark:border-gray-600 border-t-4 border-t-blue-500
                rounded-full animate-spin"
                style={{ animation: "spin 1s linear infinite" }}
              />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
