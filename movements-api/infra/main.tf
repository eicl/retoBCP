provider "aws" {
  region = "us-east-2"
}

resource "aws_dynamodb_table" "movements" {
  name         = "MovementsTable"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "id"

  attribute {
    name = "id"
    type = "S"
  }
}