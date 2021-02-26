import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], //forFeature defines which repositories are registered in the current scope
  providers: [UsersService],
  exports: [UsersService], //  exports: [TypeOrmModule] if we want to use the repo outside of this module.
})
export class UsersModule {}
