import { Button } from "@/components/ui/button";
import Link from "@/node_modules/next/link";
import { FunctionComponent } from "react";

interface LandingPageProps {}

const LandingPage: FunctionComponent<LandingPageProps> = () => {
  return (
    <>
      <div>Landing Page</div>
      <div>
        <Link href={"/sign-in"}>
          <Button>Login</Button>
        </Link>
        <Link href={"/sign-up"}>
          <Button>Register</Button>
        </Link>
      </div>
    </>
  );
};

export default LandingPage;
