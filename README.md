<h1 align="center">picture-verification-code</h1>

<div align="center">

![](https://img.shields.io/npm/v/picture-verification-code.svg?style=flat)
![](https://img.shields.io/bundlephobia/minzip/picture-verification-code?color=green&label=gzip)
![](https://img.shields.io/bundlephobia/min/picture-verification-code.svg?style=flat)
![](https://img.shields.io/npm/dw/picture-verification-code)
</div>

## 🖥 支持环境

- 现代浏览器和 IE9 及以上。

## 📦 安装

```bash
>  npm install --save picture-verification-code
```

``` js
  import VerificationCode, { createCode } from 'picture-verification-code';

  const code = new VerificationCode();
  
  // 生成随机验证码
  const vcode = createCode();

  // 生成验证码图片 DataURL
  const imgSrc = code.render(vcode);
```

## 🔨 示例

```js
  /** 设置背景白色 默认背景色随机 */
  code.setBgColor('#fff');

  /** 设置背景图片 */
  const img = document.createElement('img');
  img.src = '...';
  img.onload = function() {
    code.setBgImg(img);
    verificationCode();
  }

  /** 设置图片宽高 */
  // 实例化设置宽高
  const code = new VerificationCode(100, 40); 

  // 通过实例方法修改宽高
  code.setWidth(100);
  code.setHeight(40);

  /** 生成验证码图片 */
  code.render('AB12');

  /** 生成随机验证码 */
  // 若需要自己生成验证码，组件提供了生成随机验证码方法以供使用
  import { createCode } from 'picture-verification-code'
  const vcode = createCode();
```

## 参数及使用说明

> `new VerificationCode()` 会返回一个 `VerificationCode` 实例对象, 包含以下方法及属性;

### `VerificationCode`属性

|属性名|说明|
|-|-|
|`code`|验证码数组|
|`bgColor`|验证码背景色|
|`bgImage`|验证码背景图|
|`size`|验证码大小|
|`width`|验证码宽度|
|`height`|验证码高度|
|`canvas`|绘制的验证码 `canvas`|
|`ctx`|`canvas.getContext('2d')`|
|`setBgColor()`|设置验证码背景色|
|`setBgImg()`|设置验证码背景图|
|`setWidth()`|设置验证码宽度|
|`setHeight()`|设置验证码高度|
|`render()`|绘制验证码，返回 `DataUrl`|

**注意：**

- `size` 是根据验证码长度，图片宽高自动计算的，不建议手动修改 `size` 有可能会影响验证码显示，导致显示不全

- `new VerificationCode()` 实例化接收两个参数 `width`、`height`, 您可以在初始化时就定义好宽高，也可以通过 `setWidth()`、`setHeight()` 来设置宽高，另外，宽度我们有一套计算规则，若您设置的宽度小于代码计算的宽度，则会以系统计算的为主，这是为了防止验证码过长，而画布过窄导致验证码显示不全的问题。**我们建议您使用默认宽度，即实例化不必传参，高度通过 `setHeight()` 设置**

---

### `createCode()`

> 本组件提供验证码生成方法，若验证码需要前端自己生成，可以采用此方法，默认生成长度为4位的验证码，数字+字母组合

## 更新日志

- **v1.0.0**  
  发布验证码图片生成器

## 🔗 链接

- [项目地址](https://github.com/zhangjichengcc/picture-verification-code)
- [my portfolio](https://portfolio.zhangjc.cn/)

## 🤝 参与共建

- author zhangjicheng
- Email zhangjichengcc@163.com
