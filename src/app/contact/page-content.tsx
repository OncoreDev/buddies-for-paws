"use client";

import { BFPMaster } from "@/components/logo/bfp-master";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ContactUsForm,
  contactUsFormSchema,
} from "@/lib/schema/contact-us-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Shiba from "../../../images/contact/shiba.png";

export function ContactPageContent() {
  const form = useForm<ContactUsForm>({
    resolver: zodResolver(contactUsFormSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactUsForm) {
    const toastId = toast.loading("Submitting your message...");
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Failed to submit form");
      }

      console.log("Form submitted successfully:", data);
      toast.success(
        "Your message has been sent and we will get back to you soon!",
        {
          id: toastId,
        },
      );
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast.error(error.message || "Failed to submit form", {
        id: toastId,
      });
    }
  }

  return (
    <div className="mx-auto grid w-full max-w-7xl gap-16 px-6 py-24 sm:px-16 sm:py-32 sm:pb-40 lg:grid-cols-2">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="relative hidden items-center justify-center lg:flex"
      >
        <BFPMaster className="text-orange w-64" />

        <Image
          src={Shiba}
          alt="An elephant in a field"
          fill
          className="absolute inset-0 -z-10 h-full w-full object-contain opacity-60"
        />
      </motion.div>
      <motion.div
        variants={{
          visible: {
            transition: {
              delayChildren: 0.2,
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ type: "spring" }}
        viewport={{ once: true }}
        className="flex flex-col gap-8"
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ type: "spring" }}
          className="font-cooper text-orange text-5xl"
        >
          Contact Us
        </motion.h1>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ type: "spring" }}
        >
          For more information on how to get involved with Buddies for Paws
          please feel free to contact us using the form below.
        </motion.p>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ type: "spring" }}
          className="flex flex-col gap-6"
        >
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-6"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-cooper text-orange text-xl">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="buddiesforpaws@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-end justify-between gap-2">
                      <FormLabel className="font-cooper text-orange text-xl">
                        Message
                      </FormLabel>

                      <FormLabel className="text-muted-foreground text-xs">
                        ({field.value.length}/1000)
                      </FormLabel>
                    </div>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us how you'd like to get involved or ask us anything!"
                        rows={10}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                variant={"yellow"}
                className="group ml-auto"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? (
                  <Loader2 className="-ml-2 animate-spin" />
                ) : (
                  <Send className="-ml-2" />
                )}
                Send Message
              </Button>
            </form>
          </Form>
        </motion.div>
      </motion.div>
    </div>
  );
}
