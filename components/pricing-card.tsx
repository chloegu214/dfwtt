import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

interface PricingCardProps {
  name: string
  price: string
  description: string
  features: string[]
  buttonText: string
  popular?: boolean
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  buttonText,
  popular = false,
}: PricingCardProps) {
  return (
    <Card className={`relative ${popular ? "border-blue-500 border-2" : ""}`}>
      {popular && (
        <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-500">Most Popular</Badge>
      )}
      <CardHeader className="text-center">
        <CardTitle className="text-xl">{name}</CardTitle>
        <div className="mt-4">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-gray-600 ml-2">per visit</span>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant={popular ? "default" : "outline"}>
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  )
}
