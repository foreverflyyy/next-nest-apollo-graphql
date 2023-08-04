import {ObjectType, Field, Int, ID} from '@nestjs/graphql';
import {User} from "./user.entity";

@ObjectType()
export class Post {
  @Field(() => ID)
  id: string;

  @Field()
  authorId: string;

  @Field()
  body: string;

  @Field(() => User)
  user?: User;
}
