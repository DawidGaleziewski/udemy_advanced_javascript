// Pollution of global space

/** Why to avoid global variables?
 * 1. if we have more then one script we can overwrite vars from other scrips
 *    <script>
      var z = 1;
    </script>
    <script>
      var zz = 2;
    </script>
    <script>
      var zzz = 3;
    </script>
    <script>
      var z = 1000;
    </script>
 *
 */
