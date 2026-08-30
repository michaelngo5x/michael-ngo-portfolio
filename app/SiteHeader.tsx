export default function SiteHeader({className=""}:{className?:string}){
  return <header className={`project-nav site-header ${className}`}>
    <a className="brand" href="/"><b>MN</b>Michael Ngo</a>
    <nav aria-label="Primary navigation"><a href="/#work">Work</a><a href="/resume">Career</a><a href="/credentials">Credentials</a><a href="/#contact">Contact</a></nav>
    <a className="site-contact" href="mailto:MichaelNgo5x@gmail.com">Email me ↗</a>
  </header>
}
