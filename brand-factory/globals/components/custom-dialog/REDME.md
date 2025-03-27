## Usage

### Import Dialog into your Layout.astro

```html
---
import Dialog from "../../../../globals/components/custom-dialog/dialog.astro";
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
		<Dialog> Dialog Content Here! </Dialog>
		<script
			type="module"
			src="https://assets.smartsupporthub.com/js/bundle/astro_lp_v2.js"
			is:inline></script>
	</body>
</html>

<script>
  import { initModal } from "../../../../globals/components/custom-dialog/init.ts";
  initModal();
</script>
```

### Call it

Add `js-modal-trigger` class on the trigger

```html
<button class="js-modal-trigger">Call Dialog</button>
```
