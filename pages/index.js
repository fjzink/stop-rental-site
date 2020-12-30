import Head from "next/head";
import styles from "../styles/Home.module.css";
import Section from "../components/Section";
import P from "../components/SectionP";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Stop Edinburg Unhosted Rental</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-center bg-green-100 p-4 border-b-2 border-green-400">
        <h1 className="sm:text-3xl text-2xl text-center divide-y">
          Stop the Edinburg Unhosted Rental
        </h1>
      </header>

      <main className="max-w-screen-lg mx-4 sm:mx-auto font-sans">
        <Section title="What is it?">
          <P>
            The owners of 4367 Edinburg Ct in the Green Valley Highlands are
            trying to get a permit to allow them to rent out the house unhosted
            through sites like Airbnb. They have been doing this for some time
            already without getting a permit for it, and after receiving some
            complaints they are now trying to get a permit.
          </P>
          <P>
            We would like to stop this permit because an unhosted rental permit
            means that strangers will be coming in and out of the neighborhood
            unsupervised by the owners. This means people using the house to
            party, making noise, and generally disrupting the neighborhood. This
            is a quiet residential area, not someone's tourist destination.
          </P>
        </Section>
        <Section title="How can you voice your opinion?">
          <P>
            The county is holding a hearing where members of the public can
            voice their opinions and concerns. You will not be able to attend
            the hearing in person due to the pandemic, so you can call in to the
            hearing live, send an email, or send a letter.
          </P>
          <P>
            Call: <span className="font-bold">1-415-655-0001</span> and use
            access code <span className="font-bold">177 318 0273</span>
          </P>
          <P>
            Email:{" "}
            <span className="font-bold">jbharrison@solanocounty.com</span>
          </P>
          <P>
            Mail:
            <address className="flex flex-col justify-start sm:ml-8">
              <span>Resource Management, Planning Commision</span>
              <span>675 Texas Street, Suite 5500</span>
              <span>Fairfield, CA 94533</span>
            </address>
          </P>
        </Section>
        <Section title="When is it?">
          <P>January 7, 2021 at 7:00 p.m.</P>
        </Section>
        <footer className="flex justify-center">
          <a
            className="text-xl p-2 my-4 text-green-600 hover:text-green-800 border rounded border-green-600 hover:border-green-800"
            href="/edinburg_rental_hearing.pdf"
            download
          >
            View the Notice of Public Hearing
          </a>
        </footer>
      </main>
    </div>
  );
}
