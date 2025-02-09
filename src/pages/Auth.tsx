
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // This is a placeholder for actual authentication
    toast({
      title: "Coming Soon",
      description: "Authentication will be implemented with Supabase integration",
    });
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl font-bold">Welcome</CardTitle>
            <button
              onClick={() => navigate("/")}
              className="text-sm text-gray-500 hover:text-primary"
            >
              Back to home
            </button>
          </div>
          <CardDescription>
            Choose your preferred authentication method
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={isLoading}
                    required
                  />
                  <Input
                    id="password"
                    placeholder="Enter your password"
                    type="password"
                    autoComplete="current-password"
                    disabled={isLoading}
                    required
                  />
                </div>
                <Button className="w-full" type="submit" disabled={isLoading}>
                  Login
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="register">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    type="text"
                    autoCapitalize="none"
                    autoCorrect="off"
                    disabled={isLoading}
                    required
                  />
                  <Input
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={isLoading}
                    required
                  />
                  <Input
                    id="password"
                    placeholder="Create a password"
                    type="password"
                    autoComplete="new-password"
                    disabled={isLoading}
                    required
                  />
                  <Input
                    id="confirm-password"
                    placeholder="Confirm your password"
                    type="password"
                    autoComplete="new-password"
                    disabled={isLoading}
                    required
                  />
                </div>
                <Button className="w-full" type="submit" disabled={isLoading}>
                  Register
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
