import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { ClientLogos } from "@/components/home/ClientLogos";
import { Differentiators } from "@/components/home/Differentiators";
import { Services } from "@/components/home/Services";
import { SelectedWork } from "@/components/home/SelectedWork";
import { Philosophy } from "@/components/home/Philosophy";
import { CTA } from "@/components/home/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ClientLogos />
      <Services />
      <Differentiators />
      <SelectedWork />
      <Philosophy />
      <CTA />
    </Layout>
  );
};

export default Index;
