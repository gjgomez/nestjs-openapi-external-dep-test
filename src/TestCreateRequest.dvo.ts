import { TransformationType } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class TestCreateRequestDvo {
  public constructor(message: string, transformationType: TransformationType) {
    this.message = message;
    this.transformationType = transformationType;
  }

  /**
   * A message to send for the test
   * @example "My test message"
   */
  @IsString()
  @IsNotEmpty()
  public readonly message: string;

  /**
   * The transformation type associated with the test
   * @example 0
   */
  @IsEnum(TransformationType)
  public readonly transformationType: TransformationType;
}
