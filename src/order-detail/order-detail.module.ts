import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDetailController } from './order-detail.controller';
import { Order_Detail } from './order-detail.entity';
import { OrderDetailService } from './order-detail.service';

@Module({
  imports : [TypeOrmModule.forFeature([Order_Detail])],
  controllers: [OrderDetailController],
  providers: [OrderDetailService]
})
export class OrderDetailModule {}
