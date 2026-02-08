import ForEmployerForm from "../for-employers/ForEmployerForm";
import JobRequestSection from "@/components/JobRequestSection";
export const metadata = {
  title: "Place a Job Request | Complete Staffing Solutions",
  description:
    "Place a job request and connect with top talent. Complete Staffing Solutions helps employers find the right candidates.",
};

export default function JobRequestPage() {
  return (
    <main className="min-h-screen bg-white">
      <ForEmployerForm />
    </main>
  );
}
