## Usage

### Import BackToTop into your Layout.astro

```html
---
import BackToTop from "../../../../globals/components/back-to-top/back-to-top.astro";
---
<!doctype html>
// ...
<html
  lang={lang !== "showcase" ? lang : "en"}
  dir={lang === "ar" ? "rtl" : "ltr"}
  data-brandname={componentProps.brandObj.name}
  data-lptype={componentProps.lpType}
  data-registrationtype={componentProps.registrationType}
  data-recaptchasitekey={componentProps.brandObj.recaptchaKey}
  data-typage={componentProps.brandObj.typage[lang]}
  data-openwa={componentProps.brandObj.whatsapp && "true"}
  data-wanumber={componentProps.brandObj.whatsapp
    ? componentProps.brandObj.whatsappNumber[lang]
    : false}
>
	<body>
		<!-- ... -->
    <BackToTop />
		<script
			type="module"
			src="https://assets.smartsupporthub.com/js/bundle/astro_lp_v2.js"
			is:inline></script>
	</body>
</html>
```
