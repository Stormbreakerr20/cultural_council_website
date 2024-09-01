import Timeline from "@/components/shared/Timeline";
import { auth } from "@clerk/nextjs/server";
const Page = () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;
  return (
    <div className="w-full mt-12">
      <div className="flex flex-col justify-center items-center mb-24">
        <div className="mt-12 sm:mt-48 text-xl font-medium text-neutral-100/[0.7] text-center">
          This is the Cultural Society, IIT Mandi
        </div>
        <h1 className="text-6xl max-sm:text-3xl max-w-screen-md font-semibold text-center leading-tight">
          Our events
        </h1>
      </div>
      <Timeline userId = {userId}/>
    </div>
  );
};

export default Page;

