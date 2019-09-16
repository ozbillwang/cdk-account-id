import cdk = require('@aws-cdk/core');

export class HelloStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Publish the custom resource output
    new cdk.CfnOutput(this, "MyStackAccount", {
      description: "Account of this stack",
      value: this.account
    });
  }
}
