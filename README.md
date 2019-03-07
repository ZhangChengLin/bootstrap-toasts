## bootstrap-toasts

Bootstrap components <a href="https://getbootstrap.com/docs/4.3/components/toasts/" title="Toasts">"Toasts"</a>

Currently relying on Bootstrap and jQuery environments, because it is a function extension of Bootstrap

<p align="center">
<img alt="GitHub Release" src="https://img.shields.io/github/release/zhangchenglin/bootstrap-toasts.svg">
<img alt="GitHub License" src="https://img.shields.io/github/license/zhangchenglin/bootstrap-toasts.svg">
</p>
<p align="center">
<a href="https://www.npmjs.com/package/bootstrap-toasts"><img alt="NPM Version" title="NPM Package" src="https://img.shields.io/npm/v/bootstrap-toasts.svg"></a>
<img alt="NPM License" src="https://img.shields.io/npm/l/bootstrap-toasts.svg">
</p>

## Demo 
https://zhangchenglin.github.io/bootstrap-toasts/demo.html


## How to install?
```
npm install bootstrap-toasts --save-dev
```
## How to use it?
```
<script src="/bootstrap-toasts.min.js"></script>

bootstrapToasts(title, content, titleColor, delay, position, releaseTime, messageType);
```


## Parameter Description

- **title**

Type:String

Default value:undefined

Description:

---
- **content**

Type:String

Default value:undefined

Description:

---
- **titleColor**

Type:String

Default value:

Description:

| parameter |  |
| :----------: | :----------: |
| primary  |  |
| secondary  |  |
| success  |  |
| danger  |  |
| warning  |  |
| info  |  |
| dark  |  |

---
- **delay**

Type:Number

Default value:10

Unit:second

Description:

| parameter | code |
| :----------: | :---------- |
| 0  |  ```<div class="toast" data-autohide="false"></div>``` |
| 1  |  ```<div class="toast" data-autohide="true" data-delay="1000"></div>``` |
| 2  |  ```<div class="toast" data-autohide="true" data-delay="2000"></div>``` |
| 3  |  ```<div class="toast" data-autohide="true" data-delay="3000"></div>``` |
| ...  |  ```...``` |
---
- **position**

Type:String

Default value:

Description:

| parameter |  |
| :----------: | :----------: |
| topLeft  |  |
| topCenter  |  |
| topRight  |  |
| bottomLeft  |  |
| bottomCenter  |  |
| bottomRight  |  |
| center  |  |
---
- **releaseTime**

Type:String

Default value:

Description:

---
- **messageType**

Type:String

Default value:

Description:

| parameter |  |
| :----------: | :----------: |
| alert  |  |
| status  |  |

