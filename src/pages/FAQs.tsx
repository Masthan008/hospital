import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { HelpCircle, MessageSquare } from "lucide-react";

const FAQs = () => {
  const faqs = [
    {
      question: "How do I book an appointment at Sri Ananth Hospital?",
      answer: "You can book an appointment in several ways: 1) Call our main number at +91 84999-95552 or +91 90001-01155, 2) Visit our hospital directly at H.No 4-1-315/3, Indirabai Colony, Vikarabad, 3) Use our online appointment booking system on our website, or 4) Contact Dr. Gireesha Reddy directly at +91 81061 21344 for dental consultations. Our appointment desk is available 24/7 for emergency bookings."
    },
    {
      question: "What dental services are available and who is the dentist?",
      answer: "Our dental department is led by Dr. Gireesha Reddy (BDS, MDS, MBBS), an experienced Oral & Maxillofacial Surgeon. We offer comprehensive dental services including routine cleanings, fillings, root canal treatments, dental implants, cosmetic dentistry, oral surgery, wisdom tooth extraction, and emergency dental care. We use the latest dental technology and maintain strict sterilization protocols for patient safety."
    },
    {
      question: "Do you accept health insurance and what are the payment options?",
      answer: "Yes, we accept most major health insurance plans including government schemes like Ayushman Bharat, CGHS, and private insurance policies. We also offer flexible payment options including cash, card payments, UPI, and EMI facilities for expensive treatments. Our billing department can help verify your insurance coverage and explain available payment plans. For uninsured patients, we offer reasonable self-pay rates."
    },
    {
      question: "What are your emergency services and operating hours?",
      answer: "Sri Ananth Hospital provides 24/7 emergency services with qualified emergency physicians always on duty. Our emergency department handles all types of medical emergencies including cardiac emergencies, trauma cases, accidents, and critical care situations. For emergencies, call +91 84999-95552. Regular OPD hours are 9:00 AM to 8:00 PM, but emergency services are available round the clock."
    },
    {
      question: "Do you provide pediatric care and vaccination services?",
      answer: "Yes, we provide comprehensive pediatric care for infants, children, and adolescents. Our services include routine check-ups, growth monitoring, developmental assessments, treatment of childhood illnesses, and complete vaccination programs following the Indian Academy of Pediatrics schedule. We maintain a child-friendly environment and our staff is specially trained to handle pediatric patients with care and comfort."
    },
    {
      question: "What diagnostic services and X-ray facilities do you have?",
      answer: "Our hospital is equipped with modern diagnostic facilities including digital X-ray, ECG, echocardiography, ultrasound, and comprehensive laboratory services for blood tests, urine analysis, and other pathological investigations. We also have facilities for specialized cardiac tests and neurological assessments. Most routine tests can be completed within a few hours, and emergency diagnostics are available 24/7."
    },
    {
      question: "What should I expect during post-operative care?",
      answer: "Post-operative care varies by procedure, but generally includes pain management, wound care instructions, medication schedules, and follow-up appointments. Our nursing staff provides detailed discharge instructions, and our doctors are available for any post-surgery concerns. We offer home visit services for post-operative patients when needed and maintain 24/7 helpline for any urgent post-surgery queries."
    },
    {
      question: "Are EMI options available for expensive treatments?",
      answer: "Yes, we understand that some medical treatments can be expensive. We offer flexible EMI options for treatments above ₹25,000 through partnerships with leading financial institutions. EMI plans can be customized based on your financial situation with tenures ranging from 3 to 24 months. Our patient care coordinators can help you understand and apply for these payment plans during your treatment planning."
    },
    {
      question: "What safety measures do you follow for infection control?",
      answer: "We follow strict infection control protocols including regular sanitization of all areas, proper disposal of medical waste, sterilization of all medical instruments, mandatory hand hygiene for all staff, and appropriate use of personal protective equipment. Our OT maintains international standards of sterility, and we conduct regular infection control audits to ensure patient safety."
    },
    {
      question: "Do you provide ambulance services and how can I contact them?",
      answer: "Yes, we provide 24/7 ambulance services equipped with basic life support systems and trained paramedical staff. Our ambulances can be contacted at +91 84999-95552 for emergency transport. We cover Vikarabad and surrounding areas, and our ambulances are equipped to handle emergency cases during transport to our hospital."
    }
  ];

  return (
    <div className="font-inter">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-hospital-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <HelpCircle className="w-16 h-16 animate-scale-in" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Frequently Asked Questions
          </h1>
          <p className="text-xl animate-slide-in-left">
            Find answers to common questions about our hospital services, appointments, and patient care.
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="animate-fade-in">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left hover:text-primary transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Ask a Question Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="animate-scale-in">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <MessageSquare className="w-12 h-12 text-primary" />
              </div>
              <CardTitle className="text-2xl md:text-3xl text-primary">
                Have a Different Question?
              </CardTitle>
              <p className="text-gray-600">
                Can't find what you're looking for? Send us your question and we'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter your full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email address" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What is your question about?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="question">Your Question</Label>
                  <Textarea 
                    id="question" 
                    placeholder="Please describe your question in detail..."
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Submit Question
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Info CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl text-white/90 mb-8 animate-slide-in-left">
            Our medical team is available 24/7 to answer your urgent questions and provide assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-right">
            <Button size="lg" variant="outline" className="bg-white text-primary border-white hover:bg-gray-100">
              <a href="tel:+918499995552" className="flex items-center space-x-2">
                <span>Call: +91 84999-95552</span>
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              <a href="mailto:support@sriananthhospital.com" className="flex items-center space-x-2">
                <span>Email: support@sriananthhospital.com</span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;