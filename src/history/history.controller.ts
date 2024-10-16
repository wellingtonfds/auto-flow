import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { ApiConflictResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiTags } from '@nestjs/swagger';
import { NotFoundErrorDto } from '../shared/dto/not-found-error.dto';
import { CreateHistoryRepositoryDto } from './dto/create-history-repository.dto';
import { CreateHistoryDto } from './dto/create-history.dto';
import { UpdateHistoryDto } from './dto/update-history.dto';
import { HistoryService } from './history.service';

@Controller('history')
@ApiTags('Car use')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) { }

  @Post()
  @ApiCreatedResponse({
    description: 'Car use created successfully.',
    type: CreateHistoryRepositoryDto,
  })
  @ApiNotFoundResponse({
    description: 'Car or Driver not found.',
    type: NotFoundErrorDto,
  })
  @ApiConflictResponse({
    description: 'If car is already with  a driver ou a driver is already with a car you see this error message',
    type: NotFoundErrorDto,
  })



  public async create(@Body() createHistoryDto: CreateHistoryDto): Promise<CreateHistoryRepositoryDto> {
    return this.historyService.create(createHistoryDto);
  }

  @Patch(':id')
  @ApiCreatedResponse({
    description: 'Car use updated successfully.',
    type: CreateHistoryRepositoryDto,
  })
  @ApiNotFoundResponse({
    description: 'Car or Driver not found.',
    type: NotFoundErrorDto,
  })
  update(@Param('id') id: number, @Body() updateHistoryDto: UpdateHistoryDto): Promise<CreateHistoryRepositoryDto> {
    return this.historyService.update(id, updateHistoryDto);
  }
}
