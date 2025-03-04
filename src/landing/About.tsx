import { socialLink } from "@/static/data"
import { Custom } from "@/styles/custom"
import Link from "next/link"

const About = () => {
  return (
    <section className={`${Custom.section}`}
      id="about">
      <h3 className="text-center text-white text-3xl">Connect with us</h3>
      <div className="flex items-center justify-center w-full mt-8 gap-12">
        {socialLink.map((item) => (
          <Link href={item.url} key={item.name} className="flex items-center gap-2">
            <item.icon className=""/>
            <p className="capitalize text-white">{item.name}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default About