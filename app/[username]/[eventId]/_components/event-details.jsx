import { Calendar, Clock } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function EventDetails({ event }) {
  const { user } = event;
  return (
    <div className="p-10 lg:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{event.title}</h1>
      <div className="flex items-center mb-4">
        <Avatar className="w-12 h-12 mr-4">
          <AvatarImage src={user.imageUrl} alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{user.name}</h2>
          <p className="text-gray-600 dark:text-gray-300">{user.email}</p>
        </div>
      </div>
      <div className="flex items-center mb-2 text-gray-700 dark:text-gray-200">
        <Clock className="mr-2" />
        <span>{event.duration} minutes</span>
      </div>
      <div className="flex items-center mb-4 text-gray-700 dark:text-gray-200">
        <Calendar className="mr-2" />
        <span>Google Meet</span>
      </div>
      <p className="text-gray-700 dark:text-gray-300">{event.description}</p>

    <div>
     <Link href = '/dashboard'> <Button className="mt-4" variant="outline">
        Back to Dashboard
      </Button></Link>
    </div>
    </div>
  );
}
