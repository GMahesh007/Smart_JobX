import React, { useState, useEffect } from 'react';
import { Sheet, SheetTrigger, SheetContent } from '../../components/ui/sheet';
import { Button } from '../../components/ui/button';
import image from '../../assets/imagere.png'; // Import the image
import { useNavigate } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io'; // Import the search icon
import { motion } from 'framer-motion'; // Import motion for animations
import { toast } from "sonner";
import { Power } from 'lucide-react';
import GoogleLoginDialog from "../primarycomp/GoogleLoginDialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"; 
import RECPower from './power';
import SEEKpower from './PowerButton';
import { useAppStore } from '../../store'; // Import the App store

export default function Header() {
  const navigate = useNavigate();
  const { userInfo, SeekerInfo } = useAppStore(); // Get user and seeker info from App Store
  const [isScrolled, setIsScrolled] = useState(false);
  const [isGoogleDialogOpen, setIsGoogleDialogOpen] = useState(false); // Control for Google login dialog
  console.log(userInfo);
  console.log(SeekerInfo);
  console.log("hello")
  const handleC = () => {
    navigate('/');
  };
  const handleCl = () => {
    navigate('/about');
  };
  const handleCli = () => {
    navigate('/recruit');
  };
  const handleAnalysis = () => {
    navigate('/anal');
  };
  const kopls = () => {
    toast.success("Working on it! Click on Get started", { duration: 4000 });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust the scroll position as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleJobSeekerClick = () => {
    setIsGoogleDialogOpen(true); // Open Google Login Dialog for Job Seeker
  };

  // Function to handle Recruiter click
  const handleRecruiterClick = () => {
    navigate("/recruit"); // Navigate to recruiter page
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');

          .header-nav a {
            font-family: 'Quicksand', sans-serif;
            color: #666; /* Adjusted to a lighter gray for better visibility */
            transition: color 0.3s;
          }
          .header-nav a:hover {
            color: #000; /* Black on hover */
          }

          .search-icon {
            width: 1.25rem;
            height: 1.25rem;
            position: relative;
            margin-top: 0.125rem;
            margin-left: 0.3125rem;
            transition: transform 0.3s;
          }
          .search-icon:hover {
            transform: scale(1.2);
          }

          .animate-search-icon {
            animation: pulse 1.5s infinite;
          }
          @keyframes pulse {
            0% {
              transform: scale(1);
              opacity: 0.5;
            }
            50% {
              transform: scale(1.2);
              opacity: 1;
            }
            100% {
              transform: scale(1);
              opacity: 0.5;
            }
          }

          .header {
            transition: background-color 0.3s, backdrop-filter 0.3s;
          }
          .header.blurred {
            backdrop-filter: blur(5px);
            background-color: rgba(255, 255, 255, 0.8); /* White background with opacity */
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional shadow */
          }
        `}
      </style>

      <header className={`header fixed top-0 left-0 w-full z-50 ${isScrolled ? 'blurred' : ''} flex h-[3.25rem] items-center px-4 md:px-6 border-b border-gray-300 dark:border-gray-700 bg-gray-50`}>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
        </Sheet>
        <nav className="ml-auto hidden lg:flex flex-grow gap-3 items-center justify-center header-nav">
  <a href="#" className="hidden lg:flex items-center">
    <img src={image} alt="Acme Inc" className="h-10 w-10" /> {/* Increased image size */}
    <span className="ml-1 mr-52 text-black text-md font-bold header-nav">Smart-JobX</span> {/* Added text beside the image */}
  </a>
  <motion.a
    onClick={handleC}
    href="#"
    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
    variants={itemVariants}
    initial="hidden"
    animate="visible"
  >
    Home
  </motion.a>
  <motion.a
    onClick={handleCl}
    href="#"
    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
    variants={itemVariants}
    initial="hidden"
    animate="visible"
  >
    About
  </motion.a>
  <motion.a
    onClick={handleCli}
    href="#"
    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
    variants={itemVariants}
    initial="hidden"
    animate="visible"
  >
    Recruit
  </motion.a>
  <motion.a
    onClick={handleAnalysis}
    href="#"
    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
    variants={itemVariants}
    initial="hidden"
    animate="visible"
  >
    Analysis
  </motion.a>
</nav>


        {/* Conditionally render RECPower, SEEKPower, or Button based on userInfo and SeekerInfo */}
        {userInfo ? (
          <RECPower />
        ) : SeekerInfo ? (
          <SEEKpower />
        ) : (
          <Popover>
            <PopoverTrigger asChild>
            <Button
                  className="px-4 py-2 mr-64 border bg-white hover:bg-gray-100 rounded-full text-black"
                >
                  Login
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-4 rounded-lg shadow-lg bg-gray-50">
              <div className="flex justify-center space-x-4">
                <Button
                  onClick={handleJobSeekerClick}
                  className="px-4 py-2 w-full border bg-white hover:bg-gray-100 rounded-full text-black"
                >
                  Job Seeker
                </Button>
                <Button
                  onClick={handleRecruiterClick}
                  className="px-4 py-2 w-full border bg-white hover:bg-gray-100 rounded-full text-black"
                >
                  Recruiter
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        )}
      </header>
      <GoogleLoginDialog
        isDialogOpen={isGoogleDialogOpen}
        setIsDialogOpen={setIsGoogleDialogOpen}
      />
    </>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
