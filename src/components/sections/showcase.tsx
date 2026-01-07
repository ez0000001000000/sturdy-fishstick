import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowUp, CalendarCheck, Globe, Play, Plus, Signature, Sparkles, Target, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function ShowcaseSection() {
    return (
        <section>
            <div className="bg-white py-24">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div>
                        <h2 className="text-foreground max-w-2xl text-balance text-4xl font-semibold">Featured Projects Showcase</h2>
                    </div>
                    <div className="mt-16">
                        <Link href="https://stickee.simicodes.xyz" target="_blank" rel="noopener noreferrer">
                            <Card className="group overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-[1.02]">
                                <div className="aspect-video relative overflow-hidden">
                                    <Image
                                        src="https://cdn.gamma.app/0q3kwkx42ofh0ga/66921c57cb96469fb41fc2c71f93dc0c/original/image.png"
                                        alt="Stickee Project"
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-foreground text-xl font-semibold">Stickee</h3>
                                            <p className="text-muted-foreground mt-2">Innovative sticky note application for modern workflows</p>
                                        </div>
                                        <ExternalLink className="text-muted-foreground size-5 transition-colors group-hover:text-foreground" />
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
