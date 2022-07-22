/*
 * @Author: zhangjicheng
 * @Date: 2022-07-21 18:49:32
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-07-22 14:50:50
 * @FilePath: \picture-verification-code\main.d.ts
 */

/**
 * 验证码构造器类
 */
declare class VerificationCode {
  /**
   * 验证码构造器
   * @param width 图片宽度，程序会自动根据验证码长度计算一个长度，两者取最大值（防止验证码显示不全），默认 100
   * @param height 图片高度 默认 40
   */
  constructor(width?: number, height?: number)
  code: string[];
  bgColor?: string;
  bgImage?: CanvasImageSource;
  size: number;
  width: number;
  height: number;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  /**
   * 设置背景色
   * @param color 背景色
   */
  setBgColor(color: string): this;
  /**
   * 设置背景图片
   * @param img HTMLOrSVGImageElement | HTMLVideoElement | HTMLCanvasElement | ImageBitmap
   */
  setBgImg(img: CanvasImageSource): this;
  /**
   * 设置图片验证码宽度
   * @param width 
   */
  setWidth(width: number): this;
  /**
   * 设置图片验证码高度
   * @param height 
   */
  setHeight(height: number): this;
  /**
   * 生成图片验证码
   * @param code 
   */
  render: (code: string) => string;
}

/**
 * 生成随机验证码
 * @param length 验证码长度 默认 4位
 */
export declare function createCode(length?: number): string;

export default VerificationCode;
