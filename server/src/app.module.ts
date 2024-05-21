import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseProviders } from './confing/database.providers';
import { PartsModule } from './parts/parts.module';
import { LawCategoryModule } from './lawCategory/category.module';
import { LawsModule } from './laws/laws.module';

@Module({
  imports: [
    UsersModule,
    PartsModule,
    LawCategoryModule,
    TypeOrmModule.forRoot(databaseProviders),
    LawsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
