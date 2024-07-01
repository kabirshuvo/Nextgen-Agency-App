import BlogPostForm from "@/components/BlogPostForm";
import { BarChartHorizontal } from "lucide-react";

const Dashboard = () => {
  return (
    <header>
      <div className="flex gap-4">
        <h1>welcome to AdminBoard</h1>
        <div>
          <BarChartHorizontal />
        </div>
      </div>

      <div>
        <BlogPostForm />
      </div>
    </header>
  );
};

export default Dashboard;
