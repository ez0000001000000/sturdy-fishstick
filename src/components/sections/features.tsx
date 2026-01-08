import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowUp, Globe, Play, Plus, Signature, Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function FeaturesSection() {
    return (
        <section id="showcase">
            <div className="bg-white py-24">
                <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
                    <div>
                        <h2 className="text-foreground text-balance text-center text-4xl font-semibold">Our Showcase</h2>
                    </div>
                    <div className="mt-16">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <Link href="https://enneagram-analyzer.vercel.app/" target="_blank" rel="noopener noreferrer" className="group cursor-pointer transition-all duration-200 hover:scale-[1.02] h-full">
                                <Card className="overflow-hidden p-0 hover:shadow-lg transition-shadow duration-200 h-full flex flex-col">
                                    <div className="aspect-video relative flex-shrink-0">
                                        <Image
                                            src="https://cdn.gamma.app/0q3kwkx42ofh0ga/1cda6b28e9ef463fbdc43a7d0c301a5a/original/Screenshot-2026-01-07-191201.png"
                                            alt="Enneagram Analyzer"
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-6 flex-grow">
                                        <h3 className="text-foreground text-lg font-semibold">Enneagram Analyzer</h3>
                                        <p className="text-muted-foreground mt-2 text-sm">Discover your Enneagram type among nine personality profiles to understand your core motivations and growth path.</p>
                                    </div>
                                </Card>
                            </Link>
                            <Link href="https://mintlify-clone-app.vercel.app/" target="_blank" rel="noopener noreferrer" className="group cursor-pointer transition-all duration-200 hover:scale-[1.02] h-full">
                                <Card className="overflow-hidden p-0 hover:shadow-lg transition-shadow duration-200 h-full flex flex-col">
                                    <div className="aspect-video relative flex-shrink-0">
                                        <Image
                                            src="https://cdn.gamma.app/0q3kwkx42ofh0ga/3786d83ec54e401abe211b71ea1c5004/original/image.png"
                                            alt="Mintlify Landing Clone"
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-6 flex-grow">
                                        <h3 className="text-foreground text-lg font-semibold">Mintlify Landing Clone</h3>
                                        <p className="text-muted-foreground mt-2 text-sm">A modern documentation landing page inspired by Mintlify's clean design with responsive layout and smooth animations.</p>
                                    </div>
                                </Card>
                            </Link>
                            <Link href="https://dub-app-clone.vercel.app/" target="_blank" rel="noopener noreferrer" className="group cursor-pointer transition-all duration-200 hover:scale-[1.02] h-full">
                                <Card className="overflow-hidden p-0 hover:shadow-lg transition-shadow duration-200 h-full flex flex-col">
                                    <div className="aspect-video relative flex-shrink-0">
                                        <Image
                                            src="https://cdn.gamma.app/0q3kwkx42ofh0ga/e44eef8d5a1a4674a88d99853bb4decd/original/Screenshot-2025-12-31-202448.png"
                                            alt="Dub Clone"
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-6 flex-grow">
                                        <h3 className="text-foreground text-lg font-semibold">Dub Clone</h3>
                                        <p className="text-muted-foreground mt-2 text-sm">A clone of dub.co's amazing landing page with a creative unique twist.</p>
                                    </div>
                                </Card>
                            </Link>
                            <Link href="https://ezsvg.vercel.app/" target="_blank" rel="noopener noreferrer" className="group cursor-pointer transition-all duration-200 hover:scale-[1.02] h-full">
                                <Card className="overflow-hidden p-0 hover:shadow-lg transition-shadow duration-200 h-full flex flex-col">
                                    <div className="aspect-video relative flex-shrink-0">
                                        <Image
                                            src="https://cdn.gamma.app/0q3kwkx42ofh0ga/81802c98d1584bcbafd471c423b8270b/original/image.png"
                                            alt="EZsvg"
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-6 flex-grow">
                                        <h3 className="text-foreground text-lg font-semibold">EZsvg</h3>
                                        <p className="text-muted-foreground mt-2 text-sm">A massive SVG library with thousands of company logos across 50+ tech categories.</p>
                                    </div>
                                </Card>
                            </Link>
                        </div>
                    </div>
                    <div className="mt-16 text-center">
                        <p className="text-muted-foreground text-lg">And Much More</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
