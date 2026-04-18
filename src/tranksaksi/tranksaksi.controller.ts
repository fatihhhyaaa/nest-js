import { Controller, Post, Body } from '@nestjs/common';
import { TranksaksiService } from './tranksaksi.service';
import { BalikDto } from './dto/balik.dto';
import { PinjamDto } from './dto/pinjam.dto';

@Controller('tranksaksi')
export class TranksaksiController {
  constructor(private readonly tranksaksiService: TranksaksiService) {}

  @Post('pinjam')
  pinjam(@Body() pinjamDto: PinjamDto) {
    return this.tranksaksiService.pinjam(pinjamDto);
  }
  @Post('balik')
  balik(@Body() balikDto: BalikDto) {
    return this.tranksaksiService.balik(balikDto);
  }
}
