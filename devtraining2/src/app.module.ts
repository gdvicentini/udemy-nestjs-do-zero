import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [CoursesModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'cursonestjs',
    autoLoadEntities: false,
    keepConnectionAlive: true,
    entities: [__dirname + '/**/*.entity.js'],
    synchronize: false,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
