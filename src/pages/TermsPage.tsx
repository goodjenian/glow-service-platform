import { Layout } from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function TermsPage() {
  const { language } = useLanguage();

  return (
    <Layout>
      <div className="min-h-screen bg-background py-16 md:py-24">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            {language === "pt" ? "Termos de Serviço" : "Terms of Service"}
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            {language === "pt" ? (
              <>
                <p className="text-muted-foreground text-lg">
                  Última atualização: {new Date().toLocaleDateString("pt-BR")}
                </p>

                <section>
                  <h2 className="text-2xl font-bold mb-4">1. Aceitação dos Termos</h2>
                  <p className="text-muted-foreground">
                    Ao acessar e usar os serviços da Goody SEO ("Empresa", "nós", "nosso"), você concorda em estar vinculado a estes Termos de Serviço. Se você não concordar com qualquer parte destes termos, não poderá acessar nossos serviços.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">2. Descrição dos Serviços</h2>
                  <p className="text-muted-foreground">
                    A Goody SEO fornece serviços de marketing digital, incluindo mas não limitados a:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                    <li>Otimização para Mecanismos de Busca (SEO)</li>
                    <li>Otimização para Motores Generativos (GEO)</li>
                    <li>Desenvolvimento de Sites (Site Express)</li>
                    <li>Gestão de Tráfego Pago</li>
                    <li>Automação com Agentes de IA</li>
                    <li>Criação de Conteúdo para Redes Sociais</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">3. Obrigações do Cliente</h2>
                  <p className="text-muted-foreground">
                    Ao contratar nossos serviços, você concorda em:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                    <li>Fornecer informações precisas e completas sobre seu negócio</li>
                    <li>Responder prontamente às solicitações de informações ou aprovações</li>
                    <li>Manter a confidencialidade de credenciais de acesso compartilhadas</li>
                    <li>Pagar as taxas acordadas nos prazos estabelecidos</li>
                    <li>Cumprir todas as leis e regulamentos aplicáveis</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">4. Pagamento e Faturamento</h2>
                  <p className="text-muted-foreground">
                    Os termos de pagamento serão especificados em proposta comercial individual. Geralmente, trabalhamos com retainers mensais com faturamento antecipado. Atrasos no pagamento podem resultar em suspensão dos serviços.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">5. Propriedade Intelectual</h2>
                  <p className="text-muted-foreground">
                    Todo o conteúdo, estratégias e materiais criados durante a prestação de serviços serão de propriedade do cliente após o pagamento integral. A Goody SEO mantém o direito de usar trabalhos como referência de portfólio, a menos que acordado de outra forma.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">6. Confidencialidade</h2>
                  <p className="text-muted-foreground">
                    Ambas as partes concordam em manter a confidencialidade de todas as informações proprietárias compartilhadas durante o relacionamento de trabalho. Isso inclui estratégias de negócios, dados de clientes e metodologias proprietárias.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">7. Rescisão</h2>
                  <p className="text-muted-foreground">
                    Qualquer parte pode rescindir o contrato com aviso prévio de 30 dias por escrito. Em caso de rescisão, o cliente é responsável pelo pagamento de todos os serviços prestados até a data efetiva da rescisão.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">8. Limitação de Responsabilidade</h2>
                  <p className="text-muted-foreground">
                    A Goody SEO não garante resultados específicos de classificação ou tráfego, pois os algoritmos de mecanismos de busca estão fora de nosso controle. Trabalhamos diligentemente para melhorar sua presença online usando as melhores práticas da indústria.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">9. Alterações nos Termos</h2>
                  <p className="text-muted-foreground">
                    Reservamo-nos o direito de modificar estes termos a qualquer momento. Os clientes serão notificados sobre alterações significativas por e-mail ou através de nosso site.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">10. Contato</h2>
                  <p className="text-muted-foreground">
                    Para dúvidas sobre estes Termos de Serviço, entre em contato conosco:
                  </p>
                  <p className="text-muted-foreground mt-4">
                    <strong>Email:</strong> business@goodyseo.com
                  </p>
                </section>
              </>
            ) : (
              <>
                <p className="text-muted-foreground text-lg">
                  Last updated: {new Date().toLocaleDateString("en-US")}
                </p>

                <section>
                  <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground">
                    By accessing and using Goody SEO's services ("Company", "we", "our"), you agree to be bound by these Terms of Service. If you do not agree to any part of these terms, you may not access our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">2. Description of Services</h2>
                  <p className="text-muted-foreground">
                    Goody SEO provides digital marketing services, including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                    <li>Search Engine Optimization (SEO)</li>
                    <li>Generative Engine Optimization (GEO)</li>
                    <li>Website Development (Site Express)</li>
                    <li>Paid Traffic Management</li>
                    <li>AI Agent Automation</li>
                    <li>Social Media Content Creation</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">3. Client Obligations</h2>
                  <p className="text-muted-foreground">
                    By engaging our services, you agree to:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                    <li>Provide accurate and complete information about your business</li>
                    <li>Respond promptly to requests for information or approvals</li>
                    <li>Maintain confidentiality of shared access credentials</li>
                    <li>Pay agreed-upon fees within established timelines</li>
                    <li>Comply with all applicable laws and regulations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">4. Payment and Billing</h2>
                  <p className="text-muted-foreground">
                    Payment terms will be specified in individual commercial proposals. Generally, we work with monthly retainers with advance billing. Late payments may result in suspension of services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
                  <p className="text-muted-foreground">
                    All content, strategies, and materials created during service delivery shall become the property of the client upon full payment. Goody SEO retains the right to use work as portfolio reference unless otherwise agreed.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">6. Confidentiality</h2>
                  <p className="text-muted-foreground">
                    Both parties agree to maintain confidentiality of all proprietary information shared during the working relationship. This includes business strategies, client data, and proprietary methodologies.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">7. Termination</h2>
                  <p className="text-muted-foreground">
                    Either party may terminate the agreement with 30 days written notice. Upon termination, the client is responsible for payment of all services rendered up to the effective termination date.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
                  <p className="text-muted-foreground">
                    Goody SEO does not guarantee specific ranking or traffic results, as search engine algorithms are beyond our control. We work diligently to improve your online presence using industry best practices.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">9. Changes to Terms</h2>
                  <p className="text-muted-foreground">
                    We reserve the right to modify these terms at any time. Clients will be notified of significant changes via email or through our website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">10. Contact</h2>
                  <p className="text-muted-foreground">
                    For questions about these Terms of Service, please contact us:
                  </p>
                  <p className="text-muted-foreground mt-4">
                    <strong>Email:</strong> business@goodyseo.com
                  </p>
                </section>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
