import React from "react";
import Container from "./Container";
import AuthButtons from "./AuthButtons";

const HeroSection = () => {
  return (
    <div className="relative" id="home">
      <Container>
        <div className="relative pt-36 ml-auto">
          <div className="lg:w-2/3 text-center mx-auto">
            <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
              Stay Updated with AI Generated{" "}
              <span className="text-primary dark:text-white">Podcasts</span>
            </h1>
            <p className="mt-8 text-gray-700 dark:text-gray-300">
              Welcome to the future of news consumption! Our AI-powered app
              delivers personalized news podcasts based on your selected
              interests. No more endless scrolling or missing out on important
              updates. Just sit back, relax, and listen to the latest news
              curated just for you.
            </p>
            <AuthButtons />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
