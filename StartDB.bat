REM (Starts Data Base)

REM (Shows Only Outputs)
  @ECHO OFF
  CLS

SET Question=%~1

REM(Should the Data Base be Populated)
  IF "%Question%"=="" (
    GOTO :POPULATE
  ) else (
    GOTO :NEXT
  )

  :POPULATE
    SET /P Question=Populate Data Base [Y/N]?
    IF /I "%Question%" EQU "y" GOTO :NEXT
    IF /I "%Question%" EQU "n" GOTO :NEXT
  GOTO :POPULATE

:NEXT

REM (Verifies if MongoDB is Running)
  SC QUERY "MongoDb" | find "RUNNING"

REM (IF Not Running Starts MongoDB)
  IF %ERRORLEVEL%==1 (

    REM (Uses the Shortcut to Run as ADM)
    START /wait StartMongo/StartMongo.lnk
  )

REM (Populates DB)
IF "%Question%"=="y" (

  CD PopulateDB
  Start PopulateDB.bat

)
EXIT
