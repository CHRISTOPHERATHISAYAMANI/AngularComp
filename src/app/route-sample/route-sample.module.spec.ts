import { RouteSampleModule } from './route-sample.module';

describe('RouteSampleModule', () => {
  let routeSampleModule: RouteSampleModule;

  beforeEach(() => {
    routeSampleModule = new RouteSampleModule();
  });

  it('should create an instance', () => {
    expect(routeSampleModule).toBeTruthy();
  });
});
