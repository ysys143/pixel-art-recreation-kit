import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Your Beauty Platform</h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover the latest in beauty trends, products, and expert advice. Join our community for exclusive content and offers.
          </p>
          <Button>Get Started</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
