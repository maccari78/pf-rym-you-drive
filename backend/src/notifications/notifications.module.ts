import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notification } from './entities/notification.entity';
import { User } from 'src/users/entities/user.entity';
import { MailService } from 'src/mail/mail.service';
import { CronService } from './CronJobs.service';
import { UsersModule } from 'src/users/users.module';
import { Rental } from 'src/rentals/entities/rental.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Notification, User, Rental]),
    UsersModule,
  ],
  controllers: [NotificationsController],
  providers: [NotificationsService, MailService, CronService],
})
export class NotificationsModule {}
