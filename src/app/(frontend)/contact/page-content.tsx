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
import ContactImage from "../../../../images/contact/contact.png";
import ExclamationMarkSticker from "../../../../images/stickers/Exclamation mark sticker blue.png";

export function ContactPageContent() {
  const form = useForm<ContactUsForm>({
    resolver: zodResolver(contactUsFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
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
    <div className="bg-blue text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-16 sm:px-16 sm:py-24 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="relative flex flex-col"
        >
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <div className="flex items-center justify-center lg:order-1">
              <div className="relative">
                <Image
                  src={ExclamationMarkSticker}
                  alt="Exclamation Mark Sticker"
                  className="animate-float-windy absolute top-0 right-0 w-[15%]"
                />
                <Image
                  src={ContactImage}
                  alt="Contact Us"
                  className="-mb-8 w-full max-w-80 lg:max-w-none"
                />
              </div>
            </div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ type: "spring" }}
              className="font-cooper text-5xl sm:text-7xl"
            >
              Get in touch
            </motion.h1>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ type: "spring" }}
              className="font-bold sm:text-lg"
            >
              For more information on how to get involved please feel free to
              contact us via the form.
            </motion.p>
          </div>
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
                className="flex flex-col gap-6 rounded-lg bg-white p-6 text-black sm:p-8"
              >
                <div className="grid gap-x-4 gap-y-6 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-bold">
                          First Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John"
                            className="border-neutral-200 bg-neutral-100"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-bold">
                          Last Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Doe"
                            className="border-neutral-200 bg-neutral-100"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-bold">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="buddiesforpaws@gmail.com"
                          className="border-neutral-200 bg-neutral-100"
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
                        <FormLabel className="text-base font-bold">
                          How can we help you?
                        </FormLabel>

                        <FormLabel className="text-muted-foreground text-xs">
                          ({field.value.length}/1000)
                        </FormLabel>
                      </div>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us how you'd like to get involved or ask us anything!"
                          rows={10}
                          className="border-neutral-200 bg-neutral-100"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  variant={"blue"}
                  className="group ml-auto"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting && (
                    <Loader2 className="-ml-2 animate-spin" />
                  )}
                  Send your message
                </Button>
              </form>
            </Form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

// export function ContactPageContent() {
//   const form = useForm<ContactUsForm>({
//     resolver: zodResolver(contactUsFormSchema),
//     defaultValues: {
//       email: "",
//       message: "",
//     },
//   });

//   async function onSubmit(values: ContactUsForm) {
//     const toastId = toast.loading("Submitting your message...");
//     try {
//       const res = await fetch("/api/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(values),
//       });

//       const data = await res.json();
//       if (!res.ok) {
//         throw new Error(data.message || "Failed to submit form");
//       }

//       console.log("Form submitted successfully:", data);
//       toast.success(
//         "Your message has been sent and we will get back to you soon!",
//         {
//           id: toastId,
//         },
//       );
//     } catch (error: any) {
//       console.error("Error submitting form:", error);
//       toast.error(error.message || "Failed to submit form", {
//         id: toastId,
//       });
//     }
//   }

//   return (
//     <div className="mx-auto grid w-full max-w-7xl gap-16 px-6 py-24 sm:px-16 sm:py-32 sm:pb-32 lg:grid-cols-2">
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.2 }}
//         viewport={{ once: true }}
//         className="relative hidden items-center justify-center lg:flex"
//       >
//         <BFPMaster className="text-orange w-64" />

//         <Image
//           src={Shiba}
//           alt="An elephant in a field"
//           fill
//           className="absolute inset-0 -z-10 h-full w-full object-contain opacity-60"
//         />
//       </motion.div>
//       <motion.div
//         variants={{
//           visible: {
//             transition: {
//               delayChildren: 0.2,
//               staggerChildren: 0.1,
//             },
//           },
//         }}
//         initial="hidden"
//         whileInView="visible"
//         transition={{ type: "spring" }}
//         viewport={{ once: true }}
//         className="flex flex-col gap-8"
//       >
//         <motion.h1
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             visible: { opacity: 1, y: 0 },
//           }}
//           transition={{ type: "spring" }}
//           className="font-cooper text-orange text-5xl"
//         >
//           Contact us
//         </motion.h1>
//         <motion.p
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             visible: { opacity: 1, y: 0 },
//           }}
//           transition={{ type: "spring" }}
//         >
//           For more information on how to get involved with Buddies for Paws
//           please feel free to contact us using the form below.
//         </motion.p>
//         <motion.div
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             visible: { opacity: 1, y: 0 },
//           }}
//           transition={{ type: "spring" }}
//           className="flex flex-col gap-6"
//         >
//           <Form {...form}>
//             <form
//               onSubmit={form.handleSubmit(onSubmit)}
//               className="flex flex-col gap-6"
//             >
//               <FormField
//                 control={form.control}
//                 name="email"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel className="font-cooper text-orange text-xl">
//                       Email
//                     </FormLabel>
//                     <FormControl>
//                       <Input
//                         placeholder="buddiesforpaws@gmail.com"
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="message"
//                 render={({ field }) => (
//                   <FormItem>
//                     <div className="flex items-end justify-between gap-2">
//                       <FormLabel className="font-cooper text-orange text-xl">
//                         Message
//                       </FormLabel>

//                       <FormLabel className="text-muted-foreground text-xs">
//                         ({field.value.length}/1000)
//                       </FormLabel>
//                     </div>
//                     <FormControl>
//                       <Textarea
//                         placeholder="Tell us how you'd like to get involved or ask us anything!"
//                         rows={10}
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <Button
//                 type="submit"
//                 variant={"yellow"}
//                 className="group ml-auto"
//                 disabled={form.formState.isSubmitting}
//               >
//                 {form.formState.isSubmitting ? (
//                   <Loader2 className="-ml-2 animate-spin" />
//                 ) : (
//                   <Send className="-ml-2" />
//                 )}
//                 Send message
//               </Button>
//             </form>
//           </Form>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }
