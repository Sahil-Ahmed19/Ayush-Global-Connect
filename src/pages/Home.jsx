import { Nav, Hero, Chatbot, ProfileCard } from "../components";
import { Button, Space, ConfigProvider } from "antd";

const Home = () => {
  return (
    <>
      <Hero />
      <section className="flex px-32 mb-40 gap-10">
        <section className="basis-1/2">
          <h1 className=" my-8 text-5xl font-semibold tracking-wide text-rose-500 ">
            Discover Investment Opportunities
          </h1>
          <p className=" my-8 text-xl ">
            Empower your startup with the tools, knowledge, and connections it
            needs to thrive. Explore our dedicated startup section, designed to
            fuel your entrepreneurial journey from inception to success.
            Discover thriving startups, nurture your connection and investment
            opportunities.
          </p>
          <ConfigProvider theme={{ token: { colorPrimary: "#f43f5e" } }}>
            <Space direction="vertical" className="w-full">
              <Button
                type="primary"
                className="bg-rose-500 h-14 w-1/2 rounded-full text-2xl font-medium tracking-wider hover:scale-110 transition-all"
              >
                Steal a deal
              </Button>
            </Space>
          </ConfigProvider>
        </section>
        <aside className="basis-1/2 group">
          <img
            className=" group-hover:scale-110 group-hover:translate-x-4 group-hover:-translate-y-10 group-hover:rotate-3 transition-all duration-500 "
            src="/19895493_6168548.svg"
            alt=""
          />
        </aside>
      </section>
      <Chatbot />
      <Nav />
    </>
  );
};

export default Home;
