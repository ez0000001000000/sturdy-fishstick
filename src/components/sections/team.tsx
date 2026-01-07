import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import { ChevronRight, Twitter } from 'lucide-react'
import Link from 'next/link'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'

const members = [
    { src: 'https://avatars.githubusercontent.com/u/207921092?v=4', name: 'ez0000001000000', role: 'Founder & Developer', github: 'ez0000001000000' },
    { src: 'https://avatars.githubusercontent.com/u/242980286?v=4', name: 'slammers001', role: 'Co-Founder & Software Engineer', github: 'slammers001' },
    { src: 'https://avatars.githubusercontent.com/u/207253023?v=4', name: 'h0011000', role: 'Co-Founder & Software Engineer', github: 'h0011000' },
    { src: 'https://avatars.githubusercontent.com/u/207921618?v=4', name: 'as000010000', role: 'Co-Founder & Software Engineer', github: 'as000010000' },
]

export default function TeamSection() {
    return (
        <section>
            <div className="bg-white py-24">
                <div className="@container mx-auto w-full max-w-5xl px-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-foreground text-4xl font-semibold">Meet Our Team</h2>
                        <p className="text-muted-foreground my-4 text-balance text-lg">Our talented professionals bring diverse expertise and passion to every project. Together, we collaborate to deliver exceptional results and innovative solutions for our clients.</p>
                    </div>

                    <div className="@sm:grid-cols-1 @md:grid-cols-2 @lg:grid-cols-3 grid gap-6 md:gap-y-8">
                        {members.map((member, index) => (
                            <Link
                                key={index}
                                href={`https://github.com/${member.github}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group cursor-pointer transition-all duration-200 hover:scale-[1.02]"
                            >
                                <Card className="overflow-hidden p-6 text-center hover:shadow-lg transition-shadow duration-200">
                                    <div className="flex justify-center mb-4">
                                        <Avatar className="size-20 border-2 border-border shadow-lg">
                                            <AvatarImage
                                                src={member.src}
                                                alt={member.name}
                                            />
                                            <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <h3 className="text-foreground font-semibold text-lg">{member.name}</h3>
                                    <p className="text-muted-foreground text-sm mt-1">{member.role}</p>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
