'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQs() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'What services does Snowbase Studio offer?',
            answer: 'Snowbase Studio offers comprehensive web development services including custom website development, web application creation, UI/UX design, API development, database solutions, and technical consulting. We specialize in React, Next.js, TypeScript, and modern web technologies to build scalable, performant applications.',
        },
        {
            id: 'item-2',
            question: 'How long does a typical project take?',
            answer: 'Project timelines vary based on complexity and scope. A simple website typically takes 2-4 weeks, while complex web applications may take 2-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the development process with regular milestones and progress reports.',
        },
        {
            id: 'item-3',
            question: 'What is your pricing structure?',
            answer: 'We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Pricing depends on project complexity, timeline, and specific requirements. Contact us for a free consultation and detailed quote tailored to your project needs.',
        },
        {
            id: 'item-4',
            question: 'Do you provide ongoing support and maintenance?',
            answer: 'No, but we offer comprehensive post-launch support as an additional service. This includes bug fixes, security updates, performance optimization, and feature enhancements. We provide different maintenance packages with separate pricing to suit your needs, from basic support to full-service managed solutions. Contact us to discuss your specific support requirements and pricing.',
        },
        {
            id: 'item-5',
            question: 'What technologies do you work with?',
            answer: 'We specialize in modern web technologies including React, Next.js, TypeScript, Node.js, PostgreSQL, and various cloud platforms. Our tech stack is carefully chosen to ensure scalability, performance, and maintainability. We stay updated with the latest technologies to deliver cutting-edge solutions.',
            hasLink: true,
            linkText: 'Our tech stack',
            linkHref: '/stack'
        },
        {
            id: 'item-6',
            question: 'How do I get started with Snowbase Studio?',
            answer: 'Getting started is easy! Simply reach out through our contact form, email us at hi@snowbasestudio.com, or schedule a consultation call. We\'ll discuss your project requirements, provide recommendations, and create a detailed proposal with timeline and pricing.',
        },
    ]

    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-8 md:grid-cols-5 md:gap-12">
                    <div className="md:col-span-2">
                        <h2 className="text-foreground text-4xl font-semibold">FAQs</h2>
                        <p className="text-muted-foreground mt-4 text-balance text-lg">Your questions answered</p>
                        <p className="text-muted-foreground mt-6 hidden md:block">
                            Can't find what you're looking for? Contact our{' '}
                            <Link
                                href="mailto:hi@snowbasestudio.com"
                                className="text-primary font-medium hover:underline">
                                team
                            </Link>
                        </p>
                    </div>

                    <div className="md:col-span-3">
                        <Accordion
                            type="single"
                            collapsible>
                            {faqItems.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}>
                                    <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                    <AccordionContent>
                                        {item.hasLink ? (
                                            <div className="text-base">
                                                {item.answer.split(item.linkText)[0]}
                                                <Link href={item.linkHref} className="text-purple-600 font-medium hover:underline dark:text-purple-400">
                                                    {item.linkText}
                                                </Link>
                                                {item.answer.split(item.linkText)[1]}
                                            </div>
                                        ) : (
                                            <div className="text-base" dangerouslySetInnerHTML={{ __html: item.answer }} />
                                        )}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    <p className="text-muted-foreground mt-6 md:hidden">
                        Can't find what you're looking for? Contact our{' '}
                        <Link
                            href="mailto:hi@snowbasestudio.com"
                            className="text-primary font-medium hover:underline">
                            team
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}