REM (Populates DB)

REM (Shows Only Outputs)
  @ECHO OFF
  CLS

REM (Opens Mongo and Populates it)
  mongo seredempia<PopulateDB.js

EXIT
