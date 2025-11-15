"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import SplitAbout from '@/components/sections/about/SplitAbout';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, BarChart3, Clock, Crown, GraduationCap, Mail, MessageCircle, Rocket, Star, Target, Trophy, User, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="small"
      sizing="small"
      background="aurora"
      cardStyle="glass-flat"
      primaryButtonStyle="flat"
      secondaryButtonStyle="minimal"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "About", id: "about" },
            { name: "Achievements", id: "achievements" },
            { name: "Sports", id: "sports" },
            { name: "Academics", id: "academics" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Valerio Noya"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Valerio Noya"
          description="Student-Athlete at Torrey Pines High School. Dedicated to excellence in academics and water polo with a passion for leadership and community impact."
          tag="Portfolio"
          tagIcon={User}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763225101669-ndqo0zes.jpg"
          imageAlt="Valerio Noya water polo athlete"
          frameStyle="card"
          buttons={[
            { text: "Learn About Me", href: "about" },
            { text: "View Achievements", href: "achievements" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="My Journey"
          description="Born in Rio de Janeiro, Brazil, raised in Rome, Italy, and now thriving in San Diego, California. As a junior at Torrey Pines High School, I balance academic excellence with competitive water polo. My multicultural background has shaped my adaptability, leadership skills, and global perspective, preparing me for success both in and out of the pool."
        />
      </div>

      <div id="achievements" data-section="achievements">
        <FeatureCardThree
          title="Key Achievements"
          description="Highlights from my academic and athletic journey"
          tag="Accomplishments"
          tagIcon={Award}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          features={[
            {
              id: "01",
              title: "Water Polo Excellence",
              description: "Leading scorer for Torrey Pines High School varsity water polo team with outstanding performance in regional championships",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763225129926-97k4axe4.jpg",
              imageAlt: "Water polo championship achievement"
            },
            {
              id: "02",
              title: "Academic Honor Roll",
              description: "Consistently maintaining high academic standards while balancing rigorous athletic training and competition schedule",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763224861917-jjr2345r.jpg",
              imageAlt: "Academic honor roll certificate"
            },
            {
              id: "03",
              title: "Team Leadership",
              description: "Captain of varsity water polo team, mentoring younger players and fostering team unity and sportsmanship",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763225196494-kvrf7g5j.jpg",
              imageAlt: "Team leadership award"
            }
          ]}
        />
      </div>

      <div id="sports" data-section="sports">
        <SplitAbout
          title="Water Polo Excellence"
          description="Discover my journey as a competitive water polo player and team leader"
          tag="Athletics"
          tagIcon={Zap}
          textboxLayout="default"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763224860232-dxu6xfgt.jpg"
          imageAlt="Water polo team training"
          imagePosition="right"
          bulletPoints={[
            {
              title: "Varsity Team Captain",
              description: "Leading by example both in training and competition, inspiring teammates to reach their full potential",
              icon: Crown
            },
            {
              title: "Regional Championships",
              description: "Competing at the highest level in Southern California, consistently ranking among top performers",
              icon: Trophy
            },
            {
              title: "Technical Excellence",
              description: "Mastering advanced techniques in shooting, passing, and defensive positioning through dedicated practice",
              icon: Target
            }
          ]}
        />
      </div>

      <div id="academics" data-section="academics">
        <SplitAbout
          title="Academic Excellence"
          description="Maintaining high academic standards while pursuing athletic goals"
          tag="Education"
          tagIcon={GraduationCap}
          textboxLayout="default"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763224859177-vdccqxoa.jpg"
          imageAlt="Academic study environment"
          imagePosition="left"
          bulletPoints={[
            {
              title: "Honor Roll Student",
              description: "Consistently achieving academic excellence with strong performance across all subjects",
              icon: Star
            },
            {
              title: "Time Management",
              description: "Successfully balancing rigorous academic coursework with intensive athletic training schedule",
              icon: Clock
            },
            {
              title: "Future Goals",
              description: "Preparing for college applications with focus on programs that support student-athlete development",
              icon: Rocket
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Performance Stats"
          description="Key metrics from my athletic and academic journey"
          tag="Statistics"
          tagIcon={BarChart3}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="scale-rotate"
          metrics={[
            {
              id: "1",
              icon: Trophy,
              title: "Championships",
              value: "5+"
            },
            {
              id: "2",
              icon: Target,
              title: "Goals Scored",
              value: "120+"
            },
            {
              id: "3",
              icon: GraduationCap,
              title: "GPA",
              value: "3.8"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Others Say"
          description="Testimonials from coaches, teachers, and teammates"
          tag="Recommendations"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="opacity"
          testimonials={[
            {
              id: "1",
              name: "Coach Martinez",
              handle: "@coach_martinez",
              testimonial: "Valerio is an exceptional athlete and leader. His dedication to the sport and ability to motivate teammates makes him invaluable to our program.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763224863377-ufzkiosi.jpg",
              imageAlt: "Coach Martinez portrait"
            },
            {
              id: "2",
              name: "Ms. Johnson",
              handle: "@ms_johnson_teacher",
              testimonial: "Despite his demanding athletic schedule, Valerio consistently delivers high-quality academic work and demonstrates remarkable time management skills.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763224864429-fcub5efq.jpg",
              imageAlt: "Ms. Johnson teacher portrait"
            },
            {
              id: "3",
              name: "Marco Silva",
              handle: "@marco_teammate",
              testimonial: "Playing alongside Valerio has been incredible. He brings energy, skill, and leadership that elevates everyone's game. True team captain material.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763224864964-val032w4.jpg",
              imageAlt: "Marco Silva teammate portrait"
            },
            {
              id: "4",
              name: "Dr. Williams",
              handle: "@dr_williams_counselor",
              testimonial: "Valerio's multicultural background and balanced approach to academics and athletics make him a standout student with tremendous potential.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763224865542-ql1oty4c.jpg",
              imageAlt: "Dr. Williams counselor portrait"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get In Touch"
          title="Connect With Me"
          description="Interested in learning more about my journey or discussing opportunities? I'd love to hear from you."
          tagIcon={Mail}
          inputPlaceholder="Your email address"
          buttonText="Send Message"
          termsText="I'll get back to you as soon as possible. Thank you for your interest!"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Navigation",
              items: [
                { label: "About", href: "about" },
                { label: "Achievements", href: "achievements" },
                { label: "Sports", href: "sports" }
              ]
            },
            {
              title: "Academics",
              items: [
                { label: "Academic Excellence", href: "academics" },
                { label: "Performance Stats", href: "metrics" },
                { label: "Testimonials", href: "testimonials" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "Contact", href: "contact" },
                { label: "Torrey Pines HS", href: "https://tphs.schoolloop.com" }
              ]
            }
          ]}
          logoText="Valerio Noya"
          copyrightText="© 2025 | Valerio Noya Portfolio"
        />
      </div>
    </ThemeProvider>
  );
}