type VerificationCodeProps = [
  width?: number,
  height?: number
]
class VerificationCode {
  code: string[];
  bgColor?: string;
  bgImage?: CanvasImageSource;
  size: number;
  width: number;
  height: number;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor(...props: VerificationCodeProps) {
    const [ width = 100, height = 40 ] = props;
    this.width = width;
    this.height = height;
    this.size = Math.min(16 , height - 14);
    this.code = [];
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.canvas.style.cursor = "pointer";
    this.canvas.innerHTML = "<span style='color: red'>你的浏览器不支持canvas</span>";
    // 设置默认背景色，随机背景
    this.ctx.fillStyle = randomColor(180, 240);
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  setBgColor(color: string) {
    this.bgColor = color;
    return this;
  }

  setBgImg(img: CanvasImageSource) {
    this.bgImage = img;
  }

  render(code: string) {
    const { canvas, ctx } = this;
    // 先清空画布
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.code = code.split('');
    this.width = Math.max(this.width, (this.size + 5) * this.code.length);
    this.canvas.width = this.width;

    // 设置默认背景色，随机背景
    this.ctx.fillStyle = this.bgColor || randomColor(180, 240);
    this.ctx.fillRect(0, 0, this.width, this.height);

    // 绘制背景图片
    if (this.bgImage) this.ctx.drawImage(this.bgImage, 0, 0, this.width, this.height);

    ctx.textBaseline = "middle";
    const widthSpace = this.width / (this.code.length + 1);
    const y = this.height / 2;
    this.code.forEach((value, idx) => {
      const x = widthSpace * (idx + 0.5);
      ctx.font = randomNum(this.height / 2, this.height) + "px SimHei";
      ctx.fillStyle = randomColor(50, 160); // 字体颜色
      ctx.shadowOffsetX = randomNum(-3, 3); // 左右阴影偏移
      ctx.shadowOffsetY = randomNum(-3, 3); // 上下阴影偏移
      ctx.shadowBlur = randomNum(-3, 3); // 阴影模糊级别
      ctx.shadowColor = "rgba(0, 0, 0, 0.3)"; // 阴影颜色
      ctx.translate(x, y);
      ctx.fillText(value, 0, 0);
      ctx.translate(-x, -y);
    })
    return this.canvas.toDataURL('image/jpeg', 1);
  }
}

/**
 * 获取随机值
 * @param min 范围最小值
 * @param max 范围最大值
 * @returns 随机值
 */
function randomNum(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

/**
 * 随机颜色
 * @param min 范围最小值
 * @param max 范围最大值
 * @returns 随机颜色
 */
function randomColor(min: number, max: number) {
  let r = randomNum(min, max),
    g = randomNum(min, max),
    b = randomNum(min, max);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

/**
 * 获取随机验证码
 * @param length 验证码长度
 * @returns 验证码字符串
 */
function refreshCode(length?: number) {
  length = length || 4;
  const big: string[] = [], small: string[] = [];
  let number: string[] = [];
  for (let i = 65; i < 91; i++) {
    big.push(String.fromCharCode(i));
  }
  for (let i = 97; i < 123; i++) {
    small.push(String.fromCharCode(i));
  }
  number = new Array(10).fill('').map((_item, idx) => `${idx}`)
  const strArr = [...number, ...big, ...small];
  return new Array(length).fill('').map(() => strArr[randomNum(0, strArr.length - 1)]).join('');
}