import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface LoginCardProps {
  className?: string;
  // onLoginSuccess?: (data: { username: string }) => void; // Example for future extension
}

const LoginCard: React.FC<LoginCardProps> = ({ className }) => {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  // Using useCallback for handlers passed as props or with complex logic,
  // for simple state setters like these, inline functions are also acceptable.
  const handleUsernameChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  }, []);

  const handlePasswordChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }, []);

  const handleSubmit = React.useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    console.log('Attempting login with:', { username, password });

    // Simulate API call
    setTimeout(() => {
      console.log('Login simulation finished.');
      setIsLoading(false);
      // Example: onLoginSuccess?.({ username });
      // Handle success/error states here in a real application
    }, 1500);
  }, [username, password]);

  return (
    <div
      className={cn(
        'bg-card text-card-foreground p-6 rounded-lg shadow-md w-[300px]',
        'flex flex-col items-center gap-4', // Main layout: items centered, vertical gap
        className
      )}
    >
      {/* Heading: Aligned to the start of the content area due to w-full text-left */}
      <h2 className="w-full text-left text-2xl font-bold text-card-foreground">
        Log in
      </h2>

      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        <div className="w-full space-y-1.5"> {/* Small gap between label and input */}
          <Label htmlFor="username" className="text-sm font-medium text-card-foreground">
            Username
          </Label>
          <Input
            id="username"
            type="text"
            value={username}
            onChange={handleUsernameChange}
            disabled={isLoading}
            className="bg-card border-border text-card-foreground placeholder:text-muted-foreground focus-visible:ring-ring"
            autoComplete="username"
            required
          />
        </div>

        <div className="w-full space-y-1.5">
          <Label htmlFor="password" className="text-sm font-medium text-card-foreground">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            disabled={isLoading}
            className="bg-card border-border text-card-foreground placeholder:text-muted-foreground focus-visible:ring-ring"
            autoComplete="current-password"
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-md"
          disabled={isLoading}
        >
          {isLoading ? (
            // Basic loading spinner example, could be an actual spinner component
            <span className="animate-pulse">Logging in...</span>
          ) : (
            'Log in'
          )}
        </Button>
      </form>

      {/* Secondary Link: Centered text */}
      <p className="text-sm text-muted-foreground text-center">
        or,{' '}
        <a
          href="#"
          onClick={(e) => { 
            e.preventDefault(); 
            console.log('Sign up link clicked'); 
          }}
          className="font-medium text-primary underline underline-offset-2 hover:text-primary/90 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm"
        >
          sign up
        </a>
      </p>
    </div>
  );
};

export default LoginCard;
