import { CallToAction } from "@/components/sections/call-to-action";
import { PageHeader } from "@/components/shared/page-header";
import { WorksList } from "@/components/works-list";

export default function Page() {
  return (
    <div>
      <div className="container mt-8">
        <PageHeader title="Our Work" />

        <WorksList className="mt-14 text-black mb-16" />
        <CallToAction />
      </div>
    </div>
  );
}
