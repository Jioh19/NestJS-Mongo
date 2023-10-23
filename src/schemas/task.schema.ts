import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { TasksController } from 'src/tasks/tasks.controller';

@Schema({
  timestamps: true,
})
export class Task {
  @Prop({
    unique: true,
    required: true,
    trim: true,
  })
  title: string;

  @Prop({
    trim: true,
  })
  description: string;

  @Prop({
    default: false,
  })
  done: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
