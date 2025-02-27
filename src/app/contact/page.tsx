"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { SimpleFeaturesBanner } from "@/components/sections/simple-features";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "motion/react";
import { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false);

    if (res.ok) {
      setResponse("Message sent successfully!");
      setFormData({ name: "", email: "", website: "", message: "" });
    } else {
      setResponse("Failed to send message.");
    }
  };

  return (
    <>
      <div className="container flex flex-col md:flex-row items-center justify-between py-12 md:py-24 md:mt-32 bg-[#e3ff04]">
        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          className="w-full h-[250px] hidden md:block relative md:h-[600px] -mt-[20%]"
        >
          <Image
            src="/images/office.JPG"
            alt="office"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>

        <div className="w-full md:mt-6 md:max-w-lg mx-16">
          <motion.h2
            viewport={{ once: true }}
            initial={{ opacity: 0, translateX: 20 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-bold leading-tight"
          >
            Have a question?
            <br /> Let&apos;s talk.
          </motion.h2>
          <Link
            href="mailto:info@ayezeewebdesigns.com"
            className="mb-6 inline-block mt-2 text-black/50 hover:text-black hover:underline transition-all duration-200"
          >
            info@ayezeewebdesigns.com
          </Link>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
              className="border-l-0 border-r-0 border-t-0 border-b-2 py-6 border-black shadow-none rounded-none mb-6 text-black !text-lg placeholder:text-black"
              placeholder="Name*"
            />
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border-l-0 border-r-0 border-t-0 border-b-2 py-6 border-black shadow-none rounded-none mb-6 text-black !text-lg placeholder:text-black"
              placeholder="Email Address*"
            />
            <Input
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="border-l-0 border-r-0 border-t-0 border-b-2 py-6 border-black shadow-none rounded-none mb-6 text-black !text-lg placeholder:text-black"
              placeholder="Website Link"
            />
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="border-l-0 border-r-0 border-t-0 border-b-2 py-6 border-black shadow-none rounded-none mb-6 text-black !text-lg placeholder:text-black"
              placeholder="How can we help you?*"
            />

            <Button
              type="submit"
              disabled={loading}
              className="rounded-none px-8 py-6 text-lg"
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>

          {response && <p className="mt-4">{response}</p>}
        </div>
      </div>
      <div className="mt-8 md:mt-32">
        <SimpleFeaturesBanner />
      </div>
    </>
  );
}
