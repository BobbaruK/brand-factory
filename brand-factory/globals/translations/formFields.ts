import type { FormTranslations } from "../types/form-translations";
import type { BrandArrItem } from "../types/brands";
import {
  glossaryLetter_C,
  glossaryLetter_E,
  glossaryLetter_F,
  glossaryLetter_L,
  glossaryLetter_P,
} from "./glossary";

export default function formFieldsTranslations(
  brand: BrandArrItem<null>
): FormTranslations {
  return {
    firstName: glossaryLetter_F.firstName,
    lastName: glossaryLetter_L.lastName,
    email: glossaryLetter_E.email,
    phoneNo: glossaryLetter_P.phoneNo,
    country: glossaryLetter_C.country,
    agreeAtheneum: {
      en: `I agree to receive various communication from ${brand.name}.`,
      it: `Acconsento a ricevere varie comunicazioni da ${brand.name}.`,
      tr: `Marka ${brand.name}dan çeşitli iletişim almak için onay veriyorum.`,
      ro: `Sunt de acord să primesc diverse comunicări de la ${brand.name}.`,
      ar: `أوافق على تلقي مختلف الاتصالات من ${brand.name}.`,
      de: `Ich stimme zu, verschiedene Mitteilungen von ${brand.name} zu erhalten.`,
      es: `Acepto recibir diversas comunicaciones de ${brand.name}.`,
      sv: `Jag godkänner att ta emot olika kommunikationer från ${brand.name}.`,
      pt: `Concordo em receber várias comunicações de ${brand.name}.`,
      fi: `Sitouduin vastaanottamaan erilaisia viestejä ${brand.name}lta.`,
      pl: `Zgadzam się na otrzymywanie różnych komunikatów od ${brand.name}.`,
      hu: `Hozzájárulok, hogy különböző kommunikációkat kapjak ${brand.name}tól.`,
      th: `ฉันยินยอมที่จะได้รับการสื่อสารต่างๆ จาก ${brand.name}.`,
      ms: `Saya bersetuju untuk menerima pelbagai komunikasi daripada ${brand.name}.`,
      vi: `Tôi đồng ý nhận các thông tin liên lạc từ ${brand.name}.`,
    },
    agreeClassicShort: {
      en: `To proceed, You must agree to receive communications from ${brand.name}.`,
      it: `Per procedere e' necessario approvare la ricezione dei segnali da ${brand.name}.`,
      tr: `Devam etmek için ${brand.name}dan iletişim almak için onay vermelisiniz.`,
      ro: `Pentru a continua, trebuie să fiți de acord să primiți comunicări de la ${brand.name}.`,
      ar: `للمتابعة، يجب أن توافق على تلقي الاتصالات من ${brand.name}.`,
      de: `Um fortzufahren, müssen Sie zustimmen, Mitteilungen von ${brand.name} zu erhalten.`,
      es: `Para continuar, debe aceptar recibir comunicaciones de ${brand.name}.`,
      sv: `För att fortsätta måste du godkänna att erhålla kommunikation från ${brand.name}.`,
      pt: `Para prosseguir, você deve concordar em receber comunicações de ${brand.name}.`,
      fi: `Jatkaaksesi, sinun täytyy suostua vastaanottamaan viestejä ${brand.name}lta.`,
      pl: `Aby kontynuować, musisz wyrazić zgodę na otrzymywanie wiadomości od ${brand.name}.`,
      hu: `A folytatáshoz bele kell egyeznie, hogy kommunikációkat kapjon ${brand.name}tól.`,
      th: `ในการดำเนินการต่อ คุณต้องยินยอมที่จะได้รับการสื่อสารจาก ${brand.name}.`,
      ms: `Untuk meneruskan, Anda mesti bersetuju untuk menerima komunikasi daripada ${brand.name}.`,
      vi: `Để tiếp tục, bạn phải đồng ý nhận thông tin từ ${brand.name}.`,
    },
    agreeClassicShortFSA: {
      en: `I consent to the distribution of my information with third parties for promotional purposes.`,
      it: `Acconsento alla distribuzione delle mie informazioni con terze parti per scopi promozionali.`,
      tr: `Bilgilerimin üçüncü şahıslarla promosyon amaçlarıyla paylaşılmasına onay veriyorum.`,
      ro: `Sunt de acord cu distribuirea informațiilor mele către terți în scopuri promoționale.`,
      ar: `أوافق على توزيع معلوماتي مع أطراف ثالثة لأغراض ترويجية.`,
      de: `Ich stimme der Verteilung meiner Informationen mit Dritten zu Promotionszwecken zu.`,
      es: `Doy mi consentimiento para la distribución de mi información a terceros con fines promocionales.`,
      sv: `Jag samtycker till distributionen av min information till tredje part för marknadsföringsändamål.`,
      pt: `Dou meu consentimento para a distribuição das minhas informações para fins promocionais.`,
      fi: `Suostun tietojeni jakamiseen kolmansille osapuolille markkinointitarkoituksiin.`,
      pl: `Wyrażam zgodę na udostępnianie moich danych osobom trzecim w celach promocyjnych.`,
      hu: `Hozzájárulok, hogy az információimat harmadik féllel osszák meg promóciós célokra.`,
      th: `ฉันยินยอมให้ข้อมูลของฉันถูกแจกจ่ายให้กับบุคคลที่สามเพื่อวัตถุประสงค์ทางการตลาด.`,
      ms: `Saya bersetuju untuk pengedaran maklumat saya dengan pihak ketiga untuk tujuan promosi.`,
      vi: `Tôi đồng ý cho phép thông tin của tôi được chia sẻ với bên thứ ba cho mục đích quảng cáo.`,
    },
    agree1ESMA: {
      en: "I agree to be contacted / receive call / SMS / email for market news and marketing information.",
      it: "Accetto di essere contattato/a e ricevere chiamate/SMS/e-mail per notizie di mercato e informazioni di marketing.",
      tr: `Onay veriyorum / çağrı / SMS / e-posta almak için piyasa haberleri ve pazarlama bilgileri.`,
      ro: "Sunt de acord să fiu contactat / să primesc apel / SMS / e-mail pentru știri despre piață și informații de marketing.",
      ar: `أوافق على أن يتم الاتصال بي / تلقي مكالمات / رسائل نصية / بريد إلكتروني من أجل أخبار السوق والمعلومات التسويقية.`,
      de: `Ich stimme zu, kontaktiert zu werden / Anrufe / SMS / E-Mails für Marktnews und Marketinginformationen zu erhalten.`,
      es: "Estoy de acuerdo en ser contactado / recibir llamadas / SMS / correo electrónico para las noticias del mercado y la información de marketing.",
      sv: "Jag samtycker till att bli kontaktad / få samtal / SMS / e-post för marknadsnyheter och marknadsföringsinformation.",
      pt: `Eu concordo em ser contatado / receber chamadas / SMS / e-mail para notícias de mercado e informações de marketing.`,
      fi: `Suostun, että minuun ollaan yhteydessä / saan puheluja / tekstiviestejä / sähköposteja markkinauutisia ja markkinointitietoja varten.`,
      pl: "Wyrażam zgodę na kontakt / odbieranie połączeń / SMS / e-mail w celu uzyskania wiadomości rynkowych i informacji marketingowych.",
      hu: `Hozzájárulok, hogy kapcsolatba lépjenek velem / hívást / SMS-t / e-mailt kapjak piaci hírekkel és marketing információkkal.`,
      th: `ฉันยินยอมที่จะได้รับการติดต่อ / รับโทรศัพท์ / SMS / อีเมล เพื่อข่าวสารตลาดและข้อมูลการตลาด.`,
      ms: `Saya bersetuju untuk dihubungi / menerima panggilan / SMS / e-mel untuk berita pasaran dan maklumat pemasaran.`,
      vi: "Tôi đồng ý được liên lạc / nhận cuộc gọi / SMS để biết tin tức thị trường và thông tin tiếp thị.",
    },
    agree2ESMA: {
      en: `I agree with the <a href="${brand.privacyLink.en}" target="_blank">Privacy Policy</a>.`,
      it: `Sono d'accordo con l'informativa <a href="${brand.privacyLink.it}" target="_blank">sulla privacy</a>.`,
      tr: `Gizlilik Politikası ile <a href="${brand.privacyLink.tr}" target="_blank">onaylıyorum</a>.`,
      ro: `Sunt de acord cu <a href="${brand.privacyLink.ro}" target="_blank">Politica de confidențialitate</a>.`,
      ar: `أوافق على <a href="${brand.privacyLink.ar}" target="_blank">سياسة الخصوصية</a>.`,
      de: `Ich stimme der <a href="${brand.privacyLink.de}" target="_blank">Datenschutzerklärung</a> zu.`,
      es: `Estoy de acuerdo con la <a href="${brand.privacyLink.es}" target="_blank">Política de Privacidad</a>.`,
      sv: `Jag godkänner <a href="${brand.privacyLink.sv}" target="_blank">integritetspolicyn</a>.`,
      pt: `Concordo com a <a href="${brand.privacyLink.pt}" target="_blank">Política de Privacidade</a>.`,
      fi: `Hyväksyn <a href="${brand.privacyLink.fi}" target="_blank">Tietosuojakäytännön</a>.`,
      pl: `Zgadzam się z <a href="${brand.privacyLink.pl}" target="_blank">Polityką Prywatności</a>.`,
      hu: `Elfogadom a <a href="${brand.privacyLink.hu}" target="_blank">Adatvédelmi irányelveket</a>.`,
      th: `ฉันยินยอมกับ <a href="${brand.privacyLink.th}" target="_blank">นโยบายความเป็นส่วนตัว</a>.`,
      ms: `Saya bersetuju dengan <a href="${brand.privacyLink.ms}" target="_blank">Dasar Privasi</a>.`,
      vi: `Tôi đồng ý với <a href="${brand.privacyLink.vi}" target="_blank">Chính sách quyền riêng tư</a>.`,
    },
    riskESMA_CYSEC: {
      en: `Trading CFD's is risky. You might lose all your invested capital.`,
      it: `Il trading di CFD è rischioso. Potresti perdere tutto il capitale investito.`,
      tr: `CFD ticareti risklidir. Yatırım yaptığınız tüm sermayenizi kaybedebilirsiniz.`,
      ro: `Tranzacționarea CFD-urilor este riscantă. Poți pierde tot capitalul investit.`,
      ar: `تداول العقود مقابل الفروقات (CFD) يحمل مخاطر. قد تخسر كل رأس مالك المستثمر.`,
      de: `Der Handel mit CFDs ist riskant. Sie könnten Ihr gesamtes investiertes Kapital verlieren.`,
      es: `El comercio de CFD es arriesgado. Podrías perder todo el capital invertido.`,
      sv: `Handel med CFD är riskabelt. Du kan förlora hela ditt investerade kapital.`,
      pt: `O comércio de CFDs é arriscado. Você pode perder todo o seu capital investido.`,
      fi: `CFD-kaupankäynti on riskialtista. Saatat menettää kaiken sijoittamasi pääoman.`,
      pl: `Handel CFD jest ryzykowny. Możesz stracić cały zainwestowany kapitał.`,
      hu: `A CFD kereskedés kockázatos. Elveszítheted az összes befektetett tőkédet.`,
      th: `การเทรด CFD มีความเสี่ยง คุณอาจสูญเสียเงินลงทุนทั้งหมดที่คุณลงทุนไป.`,
      ms: `Perdagangan CFD berisiko. Anda mungkin kehilangan semua modal yang dilaburkan.`,
      vi: `Giao dịch CFD có rủi ro. Bạn có thể mất toàn bộ vốn đã đầu tư.`,
    },
    riskESMA_FSA: {
      en: `Trading CFD's is risky.`,
      it: `Il trading di CFD è rischioso.`,
      tr: `CFD ticareti risklidir.`,
      ro: `Tranzacționarea cu CFD-uri este riscantă.`,
      ar: `تداول العقود مقابل الفروقات (CFD) يحمل مخاطر.`,
      de: `Der Handel mit CFDs ist riskant.`,
      es: `Operar con CFDs es arriesgado.`,
      sv: `Att handla med CFD:er är riskfyllt.`,
      pt: `O comércio de CFDs é arriscado.`,
      fi: `CFD-kaupankäynti on riskialtista.`,
      pl: `Handel kontraktami CFD jest ryzykowny.`,
      hu: `A CFD kereskedés kockázatos.`,
      th: `การเทรด CFD มีความเสี่ยง`,
      ms: `Perdagangan CFD berisiko.`,
      vi: `Giao dịch CFD tiềm ẩn rủi ro.`,
    },
    officialTerms_CYSEC: {
      en: `I have read, understood and accepted the <a href="${
        brand.officialTerms?.links.privacyPolicy?.en || "#"
      }" target="_blank">Privacy Policy</a>, <a href="${
        brand.officialTerms?.links.riskWarning?.en || "#"
      }" target="_blank">Risk Warning</a>, <a href="${
        brand.officialTerms?.links.termsAndConditions?.en || "#"
      }" target="_blank">Terms and Conditions</a>, the <a href="${
        brand.officialTerms?.links.orderExecutionPolicy?.en || "#"
      }" target="_blank">Order Execution Policy</a>, and the <a href="${
        brand.officialTerms?.links.costAndCharges?.en || "#"
      }" target="_blank">Costs and Charges</a>.`,
      ro: `Am citit, înțeles și acceptat <a href="${
        brand.officialTerms?.links.privacyPolicy?.ro || "#"
      }" target="_blank">Politica de Confidențialitate</a>, <a href="${
        brand.officialTerms?.links.riskWarning?.ro || "#"
      }" target="_blank">Avertismentul privind riscurile</a>, <a href="${
        brand.officialTerms?.links.termsAndConditions?.ro || "#"
      }" target="_blank">Termenii și Condițiile</a>, <a href="${
        brand.officialTerms?.links.orderExecutionPolicy?.ro || "#"
      }" target="_blank">Politica de Execuție a Ordinelor</a> și <a href="${
        brand.officialTerms?.links.costAndCharges?.ro || "#"
      }" target="_blank">Costurile și Comisioanele</a>.`,
      it: `Ho letto, compreso e accettato la <a href="${
        brand.officialTerms?.links.privacyPolicy?.it || "#"
      }" target="_blank">Privacy Policy</a>, <a href="${
        brand.officialTerms?.links.riskWarning?.it || "#"
      }" target="_blank">Avviso sui Rischi</a>, i <a href="${
        brand.officialTerms?.links.termsAndConditions?.it || "#"
      }" target="_blank">Termini e Condizioni</a>, la <a href="${
        brand.officialTerms?.links.orderExecutionPolicy?.it || "#"
      }" target="_blank">Politica di Esecuzione degli Ordini</a> e i <a href="${
        brand.officialTerms?.links.costAndCharges?.it || "#"
      }" target="_blank">Costi e Commissioni</a>.`,
      tr: `Gizlilik Politikasını (<a href="${
        brand.officialTerms?.links.privacyPolicy?.tr || "#"
      }" target="_blank">Privacy Policy</a>), Risk Uyarısını (<a href="${
        brand.officialTerms?.links.riskWarning?.tr || "#"
      }" target="_blank">Risk Warning</a>), Şartlar ve Koşulları (<a href="${
        brand.officialTerms?.links.termsAndConditions?.tr || "#"
      }" target="_blank">Terms and Conditions</a>), Emir Gerçekleştirme Politikasını (<a href="${
        brand.officialTerms?.links.orderExecutionPolicy?.tr || "#"
      }" target="_blank">Order Execution Policy</a>) ve Maliyetler ile Ücretleri (<a href="${
        brand.officialTerms?.links.costAndCharges?.tr || "#"
      }" target="_blank">Costs and Charges</a>) okudum, anladım ve kabul ediyorum.`,
      ar: `لقد قرأت وفهمت ووافقت على <a href="${
        brand.officialTerms?.links.privacyPolicy?.ar || "#"
      }" target="_blank">سياسة الخصوصية</a>، <a href="${
        brand.officialTerms?.links.riskWarning?.ar || "#"
      }" target="_blank">تحذير المخاطر</a>، <a href="${
        brand.officialTerms?.links.termsAndConditions?.ar || "#"
      }" target="_blank">الشروط والأحكام</a>، <a href="${
        brand.officialTerms?.links.orderExecutionPolicy?.ar || "#"
      }" target="_blank">سياسة تنفيذ الأوامر</a> و<a href="${
        brand.officialTerms?.links.costAndCharges?.ar || "#"
      }" target="_blank">التكاليف والرسوم</a>.`,
      de: `Ich habe die <a href="${
        brand.officialTerms?.links.privacyPolicy?.de || "#"
      }" target="_blank">Datenschutzrichtlinie</a>, den <a href="${
        brand.officialTerms?.links.riskWarning?.de || "#"
      }" target="_blank">Risikohinweis</a>, die <a href="${
        brand.officialTerms?.links.termsAndConditions?.de || "#"
      }" target="_blank">Allgemeinen Geschäftsbedingungen</a>, die <a href="${
        brand.officialTerms?.links.orderExecutionPolicy?.de || "#"
      }" target="_blank">Ausführungspolitik</a> und die <a href="${
        brand.officialTerms?.links.costAndCharges?.de || "#"
      }" target="_blank">Kosten und Gebühren</a> gelesen, verstanden und akzeptiert.`,
      es: `He leído, entendido y aceptado la <a href="${
        brand.officialTerms?.links.privacyPolicy?.es || "#"
      }" target="_blank">Política de Privacidad</a>, la <a href="${
        brand.officialTerms?.links.riskWarning?.es || "#"
      }" target="_blank">Advertencia de Riesgo</a>, los <a href="${
        brand.officialTerms?.links.termsAndConditions?.es || "#"
      }" target="_blank">Términos y Condiciones</a>, la <a href="${
        brand.officialTerms?.links.orderExecutionPolicy?.es || "#"
      }" target="_blank">Política de Ejecución de Órdenes</a> y los <a href="${
        brand.officialTerms?.links.costAndCharges?.es || "#"
      }" target="_blank">Costes y Cargos</a>.`,
      sv: `Jag har läst, förstått och accepterat <a href="${
        brand.officialTerms?.links.privacyPolicy?.sv || "#"
      }" target="_blank">Integritetspolicyn</a>, <a href="${
        brand.officialTerms?.links.riskWarning?.sv || "#"
      }" target="_blank">Riskvarningen</a>, <a href="${
        brand.officialTerms?.links.termsAndConditions?.sv || "#"
      }" target="_blank">Villkoren</a>, <a href="${
        brand.officialTerms?.links.orderExecutionPolicy?.sv || "#"
      }" target="_blank">Orderutförandepolicyn</a> och <a href="${
        brand.officialTerms?.links.costAndCharges?.sv || "#"
      }" target="_blank">Kostnader och Avgifter</a>.`,
      pt: `Li, compreendi e aceitei a <a href="${
        brand.officialTerms?.links.privacyPolicy?.pt || "#"
      }" target="_blank">Política de Privacidade</a>, o <a href="${
        brand.officialTerms?.links.riskWarning?.pt || "#"
      }" target="_blank">Aviso de Risco</a>, os <a href="${
        brand.officialTerms?.links.termsAndConditions?.pt || "#"
      }" target="_blank">Termos e Condições</a>, a <a href="${
        brand.officialTerms?.links.orderExecutionPolicy?.pt || "#"
      }" target="_blank">Política de Execução de Ordens</a> e os <a href="${
        brand.officialTerms?.links.costAndCharges?.pt || "#"
      }" target="_blank">Custos e Encargos</a>.`,
      fi: `Olen lukenut, ymmärtänyt ja hyväksynyt <a href="${
        brand.officialTerms?.links.privacyPolicy?.fi || "#"
      }" target="_blank">Tietosuojakäytännön</a>, <a href="${
        brand.officialTerms?.links.riskWarning?.fi || "#"
      }" target="_blank">Riski-ilmoituksen</a>, <a href="${
        brand.officialTerms?.links.termsAndConditions?.fi || "#"
      }" target="_blank">Ehdot</a>, <a href="${
        brand.officialTerms?.links.orderExecutionPolicy?.fi || "#"
      }" target="_blank">Toimeksiantojen toteutuspolitiikan</a> ja <a href="${
        brand.officialTerms?.links.costAndCharges?.fi || "#"
      }" target="_blank">Kustannukset ja maksut</a>.`,
      pl: `Przeczytałem, zrozumiałem i zaakceptowałem <a href="${
        brand.officialTerms?.links.privacyPolicy?.pl || "#"
      }" target="_blank">Politykę Prywatności</a>, <a href="${
        brand.officialTerms?.links.riskWarning?.pl || "#"
      }" target="_blank">Ostrzeżenie o ryzyku</a>, <a href="${
        brand.officialTerms?.links.termsAndConditions?.pl || "#"
      }" target="_blank">Regulamin</a>, <a href="${
        brand.officialTerms?.links.orderExecutionPolicy?.pl || "#"
      }" target="_blank">Politykę realizacji zleceń</a> oraz <a href="${
        brand.officialTerms?.links.costAndCharges?.pl || "#"
      }" target="_blank">Koszty i opłaty</a>.`,
      hu: `Elolvastam, megértettem és elfogadtam az <a href="${
        brand.officialTerms?.links.privacyPolicy?.hu || "#"
      }" target="_blank">Adatvédelmi szabályzatot</a>, a <a href="${
        brand.officialTerms?.links.riskWarning?.hu || "#"
      }" target="_blank">Kockázati figyelmeztetést</a>, az <a href="${
        brand.officialTerms?.links.termsAndConditions?.hu || "#"
      }" target="_blank">Általános Szerződési Feltételeket</a>, a <a href="${
        brand.officialTerms?.links.orderExecutionPolicy?.hu || "#"
      }" target="_blank">Végrehajtási Szabályzatot</a> és a <a href="${
        brand.officialTerms?.links.costAndCharges?.hu || "#"
      }" target="_blank">Költségek és Díjak</a> leírását.`,
      th: `ฉันได้อ่าน ทำความเข้าใจ และยอมรับ <a href="${
        brand.officialTerms?.links.privacyPolicy?.th || "#"
      }" target="_blank">นโยบายความเป็นส่วนตัว</a>, <a href="${
        brand.officialTerms?.links.riskWarning?.th || "#"
      }" target="_blank">คำเตือนความเสี่ยง</a>, <a href="${
        brand.officialTerms?.links.termsAndConditions?.th || "#"
      }" target="_blank">ข้อกำหนดและเงื่อนไข</a>, <a href="${
        brand.officialTerms?.links.orderExecutionPolicy?.th || "#"
      }" target="_blank">นโยบายการดำเนินการตามคำสั่ง</a> และ <a href="${
        brand.officialTerms?.links.costAndCharges?.th || "#"
      }" target="_blank">ค่าใช้จ่ายและค่าธรรมเนียม</a>.`,
      ms: `Saya telah membaca, memahami dan menerima <a href="${
        brand.officialTerms?.links.privacyPolicy?.ms || "#"
      }" target="_blank">Dasar Privasi</a>, <a href="${
        brand.officialTerms?.links.riskWarning?.ms || "#"
      }" target="_blank">Amaran Risiko</a>, <a href="${
        brand.officialTerms?.links.termsAndConditions?.ms || "#"
      }" target="_blank">Terma dan Syarat</a>, <a href="${
        brand.officialTerms?.links.orderExecutionPolicy?.ms || "#"
      }" target="_blank">Dasar Pelaksanaan Pesanan</a> dan <a href="${
        brand.officialTerms?.links.costAndCharges?.ms || "#"
      }" target="_blank">Kos dan Caj</a>.`,
      vi: `Tôi đã đọc, hiểu và chấp nhận <a href="${
        brand.officialTerms?.links.privacyPolicy?.vi || "#"
      }" target="_blank">Chính sách Bảo mật</a>, <a href="${
        brand.officialTerms?.links.riskWarning?.vi || "#"
      }" target="_blank">Cảnh báo Rủi ro</a>, <a href="${
        brand.officialTerms?.links.termsAndConditions?.vi || "#"
      }" target="_blank">Điều khoản và Điều kiện</a>, <a href="${
        brand.officialTerms?.links.orderExecutionPolicy?.vi || "#"
      }" target="_blank">Chính sách Thực hiện Lệnh</a> và <a href="${
        brand.officialTerms?.links.costAndCharges?.vi || "#"
      }" target="_blank">Chi phí và Phí</a>.`,
    },
    officialTerms_FSA: {
      en: `I have read, understood and accepted the <a href="${
        brand.officialTerms?.links.privacyPolicy?.en || "#"
      }" target="_blank">Privacy Policy</a>, <a href="${
        brand.officialTerms?.links.riskWarning?.en || "#"
      }" target="_blank">Risk Warning</a>, <a href="${
        brand.officialTerms?.links.termsAndConditions?.en || "#"
      }" target="_blank">Terms and Conditions</a> and the <a href="${
        brand.officialTerms?.links.orderExecutionPolicy?.en || "#"
      }" target="_blank">Order Execution Policy</a>`,
      ro: `Am citit, înțeles și acceptat <a href="${
        brand.officialTerms?.links.privacyPolicy?.ro || "#"
      }" target="_blank">Politica de Confidențialitate</a>, <a href="${
        brand.officialTerms?.links.riskWarning?.ro || "#"
      }" target="_blank">Avertismentul privind riscurile</a>, <a href="${
        brand.officialTerms?.links.termsAndConditions?.ro || "#"
      }" target="_blank">Termenii și Condițiile</a> și <a href="${
        brand.officialTerms?.links.orderExecutionPolicy?.ro || "#"
      }" target="_blank">Politica de Execuție a Ordinelor</a>`,
      it: `Ho letto, compreso e accettato la <a href="${
        brand.officialTerms?.links.privacyPolicy?.it || "#"
      }" target="_blank">Privacy Policy</a>, l'<a href="${
        brand.officialTerms?.links.riskWarning?.it || "#"
      }" target="_blank">Avviso sui Rischi</a>, i <a href="${
        brand.officialTerms?.links.termsAndConditions?.it || "#"
      }" target="_blank">Termini e Condizioni</a> e la <a href="${
        brand.officialTerms?.links.orderExecutionPolicy?.it || "#"
      }" target="_blank">Politica di Esecuzione degli Ordini</a>`,
      tr: `<a href="${
        brand.officialTerms?.links.privacyPolicy?.tr || "#"
      }" target="_blank">Gizlilik Politikasını</a>, <a href="${
        brand.officialTerms?.links.riskWarning?.tr || "#"
      }" target="_blank">Risk Uyarısını</a>, <a href="${
        brand.officialTerms?.links.termsAndConditions?.tr || "#"
      }" target="_blank">Şartlar ve Koşulları</a> ve <a href="${
        brand.officialTerms?.links.orderExecutionPolicy?.tr || "#"
      }" target="_blank">Emir Gerçekleştirme Politikasını</a> okudum, anladım ve kabul ediyorum.`,
      ar: `لقد قرأت وفهمت ووافقت على <a href="${
        brand.officialTerms?.links.privacyPolicy?.ar || "#"
      }" target="_blank">سياسة الخصوصية</a>، <a href="${
        brand.officialTerms?.links.riskWarning?.ar || "#"
      }" target="_blank">تحذير المخاطر</a>، <a href="${
        brand.officialTerms?.links.termsAndConditions?.ar || "#"
      }" target="_blank">الشروط والأحكام</a> و<a href="${
        brand.officialTerms?.links.orderExecutionPolicy?.ar || "#"
      }" target="_blank">سياسة تنفيذ الأوامر</a>`,
      de: `Ich habe die <a href="${
        brand.officialTerms?.links.privacyPolicy?.de || "#"
      }" target="_blank">Datenschutzrichtlinie</a>, den <a href="${
        brand.officialTerms?.links.riskWarning?.de || "#"
      }" target="_blank">Risikohinweis</a>, die <a href="${
        brand.officialTerms?.links.termsAndConditions?.de || "#"
      }" target="_blank">Allgemeinen Geschäftsbedingungen</a> und die <a href="${
        brand.officialTerms?.links.orderExecutionPolicy?.de || "#"
      }" target="_blank">Ausführungspolitik</a> gelesen, verstanden und akzeptiert.`,
      es: `He leído, entendido y aceptado la <a href="${
        brand.officialTerms?.links.privacyPolicy?.es || "#"
      }" target="_blank">Política de Privacidad</a>, la <a href="${
        brand.officialTerms?.links.riskWarning?.es || "#"
      }" target="_blank">Advertencia de Riesgo</a>, los <a href="${
        brand.officialTerms?.links.termsAndConditions?.es || "#"
      }" target="_blank">Términos y Condiciones</a> y la <a href="${
        brand.officialTerms?.links.orderExecutionPolicy?.es || "#"
      }" target="_blank">Política de Ejecución de Órdenes</a>`,
      sv: `Jag har läst, förstått och accepterat <a href="${
        brand.officialTerms?.links.privacyPolicy?.sv || "#"
      }" target="_blank">Integritetspolicyn</a>, <a href="${
        brand.officialTerms?.links.riskWarning?.sv || "#"
      }" target="_blank">Riskvarningen</a>, <a href="${
        brand.officialTerms?.links.termsAndConditions?.sv || "#"
      }" target="_blank">Villkoren</a> och <a href="${
        brand.officialTerms?.links.orderExecutionPolicy?.sv || "#"
      }" target="_blank">Orderutförandepolicyn</a>`,
      pt: `Li, compreendi e aceitei a <a href="${
        brand.officialTerms?.links.privacyPolicy?.pt || "#"
      }" target="_blank">Política de Privacidade</a>, o <a href="${
        brand.officialTerms?.links.riskWarning?.pt || "#"
      }" target="_blank">Aviso de Risco</a>, os <a href="${
        brand.officialTerms?.links.termsAndConditions?.pt || "#"
      }" target="_blank">Termos e Condições</a> e a <a href="${
        brand.officialTerms?.links.orderExecutionPolicy?.pt || "#"
      }" target="_blank">Política de Execução de Ordens</a>`,
      fi: `Olen lukenut, ymmärtänyt ja hyväksynyt <a href="${
        brand.officialTerms?.links.privacyPolicy?.fi || "#"
      }" target="_blank">Tietosuojakäytännön</a>, <a href="${
        brand.officialTerms?.links.riskWarning?.fi || "#"
      }" target="_blank">Riski-ilmoituksen</a>, <a href="${
        brand.officialTerms?.links.termsAndConditions?.fi || "#"
      }" target="_blank">Ehdot</a> ja <a href="${
        brand.officialTerms?.links.orderExecutionPolicy?.fi || "#"
      }" target="_blank">Toimeksiantojen toteutuspolitiikan</a>`,
      pl: `Przeczytałem, zrozumiałem i zaakceptowałem <a href="${
        brand.officialTerms?.links.privacyPolicy?.pl || "#"
      }" target="_blank">Politykę Prywatności</a>, <a href="${
        brand.officialTerms?.links.riskWarning?.pl || "#"
      }" target="_blank">Ostrzeżenie o ryzyku</a>, <a href="${
        brand.officialTerms?.links.termsAndConditions?.pl || "#"
      }" target="_blank">Regulamin</a> oraz <a href="${
        brand.officialTerms?.links.orderExecutionPolicy?.pl || "#"
      }" target="_blank">Politykę Realizacji Zleceń</a>`,
      hu: `Elolvastam, megértettem és elfogadtam az <a href="${
        brand.officialTerms?.links.privacyPolicy?.hu || "#"
      }" target="_blank">Adatvédelmi Szabályzatot</a>, a <a href="${
        brand.officialTerms?.links.riskWarning?.hu || "#"
      }" target="_blank">Kockázati Figyelmeztetést</a>, az <a href="${
        brand.officialTerms?.links.termsAndConditions?.hu || "#"
      }" target="_blank">Általános Szerződési Feltételeket</a> és a <a href="${
        brand.officialTerms?.links.orderExecutionPolicy?.hu || "#"
      }" target="_blank">Végrehajtási Szabályzatot</a>`,
      th: `ฉันได้อ่าน ทำความเข้าใจ และยอมรับ <a href="${
        brand.officialTerms?.links.privacyPolicy?.th || "#"
      }" target="_blank">นโยบายความเป็นส่วนตัว</a>, <a href="${
        brand.officialTerms?.links.riskWarning?.th || "#"
      }" target="_blank">คำเตือนความเสี่ยง</a>, <a href="${
        brand.officialTerms?.links.termsAndConditions?.th || "#"
      }" target="_blank">ข้อกำหนดและเงื่อนไข</a> และ <a href="${
        brand.officialTerms?.links.orderExecutionPolicy?.th || "#"
      }" target="_blank">นโยบายการดำเนินการตามคำสั่ง</a>`,
      ms: `Saya telah membaca, memahami dan menerima <a href="${
        brand.officialTerms?.links.privacyPolicy?.ms || "#"
      }" target="_blank">Dasar Privasi</a>, <a href="${
        brand.officialTerms?.links.riskWarning?.ms || "#"
      }" target="_blank">Amaran Risiko</a>, <a href="${
        brand.officialTerms?.links.termsAndConditions?.ms || "#"
      }" target="_blank">Terma dan Syarat</a> dan <a href="${
        brand.officialTerms?.links.orderExecutionPolicy?.ms || "#"
      }" target="_blank">Dasar Pelaksanaan Pesanan</a>`,
      vi: `Tôi đã đọc, hiểu và chấp nhận <a href="${
        brand.officialTerms?.links.privacyPolicy?.vi || "#"
      }" target="_blank">Chính sách Bảo mật</a>, <a href="${
        brand.officialTerms?.links.riskWarning?.vi || "#"
      }" target="_blank">Cảnh báo Rủi ro</a>, <a href="${
        brand.officialTerms?.links.termsAndConditions?.vi || "#"
      }" target="_blank">Điều khoản và Điều kiện</a> và <a href="${
        brand.officialTerms?.links.orderExecutionPolicy?.vi || "#"
      }" target="_blank">Chính sách Thực hiện Lệnh</a>`,
    },
  };
}
