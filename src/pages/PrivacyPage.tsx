import { Layout } from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageMeta } from "@/hooks/usePageMeta";

const PrivacyPage = () => {
  const { language } = useLanguage();

  usePageMeta(
    language === "pt" ? "Política de Privacidade | GoodySEO" : "Privacy Policy | GoodySEO",
    language === "pt" ? "Leia a política de privacidade da GoodySEO e entenda como protegemos seus dados pessoais." : "Read GoodySEO's privacy policy and understand how we protect your personal data."
  );

  return (
    <Layout>
      <div className="bg-primary py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground text-center">
            {language === "pt" ? "Política de privacidade" : "Privacy Policy"}
          </h1>
        </div>
      </div>

      <div className="py-16 md:py-24">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {language === "pt" ? (
              <>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  A Goody SEO respeita seu direito à privacidade e implementou medidas de segurança para seus dados pessoais, garantindo que suas informações sejam gerenciadas de acordo com as regulamentações de privacidade de dados aplicáveis. Recomendamos que você leia esta política de privacidade na íntegra para estar totalmente informado.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  Esta Política de Privacidade ("Política") aplica-se à coleta e uso de informações pessoalmente identificáveis ("Informações Pessoais") coletadas através do uso do site da Goody SEO ("Site"), incluindo todos os softwares, dados, relatórios, textos, imagens, sons, vídeos e conteúdos disponibilizados através de qualquer parte do site.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Limitação de coleta</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  A Goody SEO leva sua privacidade a sério. Qualquer Informação Pessoal que você fornecer à Goody SEO é limitada àquela necessária para os fins identificados por nós. As Informações Pessoais são coletadas apenas por meios justos e legais.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Responsabilidade</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Somos responsáveis por todas as Informações Pessoais sob nosso controle. Estabelecemos políticas e procedimentos para cumprir nossa Política e estamos comprometidos em garantir a conformidade com a legislação de privacidade. Se você precisar nos contatar sobre suas questões ou preocupações específicas de privacidade, consulte as informações de contato no final da Política.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Coleta de informações pessoais</h2>
                
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">a. Consultas iniciais através do site</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Vários tipos de Informações Pessoais podem ser solicitados para prosseguir com uma consulta à Goody SEO ou ao optar por um serviço de assinatura de e-mail. Na maioria dos casos, essas informações incluem seu nome, endereço de e-mail e/ou número de telefone. A Goody SEO pode enviar informações sobre nossos produtos e serviços por e-mail. Você pode optar por receber essas informações preenchendo um formulário de contato em nosso Site e nos dando seu consentimento.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">b. Gestão de relacionamento com o cliente (CRM)</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Através do nosso CRM, as Informações Pessoais que podem ser armazenadas incluem seu nome, endereço de e-mail, nome da empresa, número de telefone e localização. Nossa equipe interna usa Informações Pessoais para responder a consultas. A menos que exigido por lei, não compartilhamos essas Informações Pessoais com agências terceiras.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">c. Remarketing do Facebook</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  O Facebook pode usar cookies para exibir anúncios com base em visitas anteriores ao Site. Quaisquer dados coletados serão usados de acordo com nossa própria Política, bem como com a política de privacidade do Facebook.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">d. Google Analytics</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Através do Google Analytics, a Goody SEO pode rastrear a localização do tráfego do site e a fonte de navegação de nossos visitantes, bem como o tempo total gasto no Site. Endereços IP, URLs visitadas e informações relacionadas são registrados para todos os visitantes do site para fins de análise de tráfego. Essas informações são usadas para entender nosso público e melhorar nossa experiência de usuário online.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Identificação de propósito</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Você concorda que podemos coletar e usar Informações Pessoais de você e sobre você para os seguintes propósitos:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-8">
                  <li>Para nos comunicar com você, incluindo responder às suas perguntas ou consultas sobre os produtos e serviços que fornecemos.</li>
                  <li>Para entender suas necessidades a fim de comercializar e remarcar produtos e serviços para você.</li>
                  <li>Para analisar a adequação de nossos produtos e serviços para você.</li>
                  <li>Para desenvolver, gerenciar e oferecer produtos e serviços que atendam às suas necessidades.</li>
                  <li>Para fornecer serviço contínuo.</li>
                  <li>Para gerenciar e avaliar nossos riscos, operações e relacionamento com você.</li>
                  <li>Para cumprir nossos requisitos legais e regulatórios.</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Limitação de uso</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  A menos que você consinta de outra forma ou seja exigido por lei, as Informações Pessoais só podem ser usadas ou divulgadas por nós para os fins para os quais foram coletadas. Mantemos as Informações Pessoais apenas pelo tempo necessário para atender a esses fins. Informações Pessoais que não são mais necessárias para cumprir os fins identificados são destruídas, apagadas ou tornadas anônimas.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Transparência</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Mediante solicitação, a Goody SEO fornecerá uma explicação de sua Política com relação à gestão de Informações Pessoais. Você pode nos contatar com quaisquer consultas ou reclamações ou se precisar de mais informações.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Acesso individual</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Se você deseja obter uma cópia das Informações Pessoais mantidas sobre você por nós, ou atualizar, corrigir ou excluir quaisquer Informações Pessoais que você nos forneceu, ou se tiver quaisquer perguntas ou sugestões para melhorar esta Política, entre em contato conosco.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Consentimento para coleta</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Sujeito a certas restrições legais e contratuais e aviso razoável, você pode recusar ou retirar o consentimento para a coleta, uso ou divulgação de Informações Pessoais a qualquer momento entrando em contato conosco. Se você recusar ou retirar seu consentimento, podemos não ser capazes de fornecer ou continuar fornecendo alguns produtos, serviços ou informações que podem ser de valor para você.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Alterações na política</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  De tempos em tempos, podemos atualizar ou fazer alterações na Política para cumprir quaisquer mudanças na legislação ou para levar em consideração quaisquer outras questões que possam surgir. Caso façamos quaisquer alterações, publicaremos a Política revisada no Site e/ou forneceremos um link ou notificação por e-mail.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Entre em contato</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Se a qualquer momento você tiver dúvidas sobre nossa Política ou nosso acesso e uso de Informações Pessoais, ou se desejar retirar seu nome de qualquer uma de nossas listas de e-mail, não hesite em nos contatar.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  A Goody SEO agradece quaisquer perguntas, comentários ou consultas. Você pode nos contatar sobre suas questões ou preocupações específicas de privacidade em: <a href="mailto:business@goodyseo.com" className="text-accent hover:underline">business@goodyseo.com</a>
                </p>

                <p className="text-sm text-muted-foreground mt-12 pt-8 border-t border-border">
                  © {new Date().getFullYear()} Goody SEO. Todos os direitos reservados.
                </p>
              </>
            ) : (
              <>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Goody SEO respects your right to privacy, and we have put in place security measures for your personal data, along with ensuring that your personal data is managed in accordance with applicable data privacy regulations. We recommend that you read this privacy policy in full to ensure you are fully informed.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  This Privacy Policy (the "Policy") applies to the collection and use of personally identifiable information (the 'Personal Information') gathered through the use of the Goody SEO website (the "Website"), including all software, data, reports, text, images, sounds, video, and content made available through any portion of the website.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Limiting Collection</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Goody SEO takes your privacy seriously. Any Personal Information that you provide to Goody SEO is limited to that which is needed for the purposes identified by us. Personal Information is collected by fair and lawful means only.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Accountability</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We are responsible for all Personal Information under our control. We have established policies and procedures to comply with our Policy, and are committed to ensure we comply with privacy legislation. If you need to contact us regarding your specific privacy questions or concerns, please see the contact information at the end of the Policy.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Collection of Personal Information</h2>
                
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">a. Initial inquiries through the Website</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Various types of Personal Information may be required from you in order to proceed with an inquiry with Goody SEO or when opting in to an email subscription service. In most cases, this Personal Information includes your name, e-mail address and/or telephone number. Goody SEO may send you information regarding our products and services through e-mail. You may choose to receive this information by filling out a contact form on our Website and giving us your consent.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">b. Customer Relationship Management (CRM)</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Through our CRM, Personal Information that may be stored includes your name, email address, business name, telephone number and location. Our in house team uses Personal Information to respond to inquiries. Unless required by law, we do not share this Personal Information with third party agencies.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">c. Facebook remarketing</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Facebook may use cookies to display ads based on past visits to the Website. Any data collected will be used in agreement with our own Policy as well as Facebook's privacy policy.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">d. Google Analytics</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Through Google Analytics, Goody SEO can track the location of website traffic and the source of our visitors browsing, as well as the total time spent on the Website. IP addresses, URLs visited, and related information is recorded for all site visitors for the purpose of site traffic analytics. This information is used to understand our audiences and improve our online user experience.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Identifying Purpose</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree that we may collect and use Personal Information from you and about you for the following purposes:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-8">
                  <li>To communicate with you, including responding to your questions or inquiries in relation to the products and services that we provide.</li>
                  <li>To understand your needs in order to market and remarket products and services to you.</li>
                  <li>To analyze the suitability of our products and services for you.</li>
                  <li>To develop, manage and offer products and services that meet your needs.</li>
                  <li>To provide you with ongoing service.</li>
                  <li>To manage and assess our risks, operations and relationship with you.</li>
                  <li>To meet our legal and regulatory requirements.</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Limiting Use</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Unless you consent otherwise or it is required by law, Personal Information can only be used or disclosed by us for the purposes for which it was collected. We keep Personal information only as long as required to serve those purposes. Personal Information that is no longer required to fulfil the identified purposes is destroyed, erased or made anonymous.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Openness</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Upon request, Goody SEO will provide an explanation of its Policy with respect to the management of Personal Information. You can contact us with any inquiries or complaints or if you require further information.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Individual Access</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  If you would like to obtain a copy of the Personal Information held about you by us, or update, correct, or delete any Personal Information that you have provided to us, or if you have any questions or suggestions for improving this Policy, please contact us.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Consent to Collection</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Subject to certain legal and contractual restrictions and reasonable notice, you may refuse or withdraw consent to the collection, use or disclosure of Personal Information at any time by contacting us. If you refuse or withdraw your consent, we may not be able to provide you or continue to provide you with some products, services or information which may be of value to you.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Changing our Policy</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  From time to time, we may update or make amendments to the Policy to comply with any changes in legislation or to take into consideration any other issues that may arise. Should we make any changes, we will post the revised Policy on the Website and/or provide you with a link or an email notification.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If at any time you have any questions regarding our Policy or our access and use of Personal Information, or if you wish to withdraw your name from any of our mailing lists, do not hesitate to contact us.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Goody SEO welcomes any questions, comments or inquiries. You may contact us regarding your specific privacy questions or concerns at: <a href="mailto:business@goodyseo.com" className="text-accent hover:underline">business@goodyseo.com</a>
                </p>

                <p className="text-sm text-muted-foreground mt-12 pt-8 border-t border-border">
                  © {new Date().getFullYear()} Goody SEO. All rights reserved.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPage;
