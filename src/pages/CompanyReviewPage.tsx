import Header from "../components/company_review/Header";
import ReviewContent from "../components/company_review/ReviewContent";

export default function CompanyReviewPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#ffff]">
      <Header />
      <ReviewContent />
    </div>
  );
}
